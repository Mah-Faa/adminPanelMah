import React, { useState, useEffect } from "react";
import axios from "axios";
import TableChart from "./tableChart";
import Pagination from "./Pagination";
import { USER_PER_PAGE } from "../../../../utils/constants";

const SaleryList = () => {
  const pageItemCount = process.env.REACT_APP_PAGE_ITEM_COUNT;
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [salerys, setSalarys] = useState([]);
  const [totalCount, setTotalCount] = useState();

  useEffect(() => {
    getSalerys();
  }, []);

  const getSalerys = () => {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log(res);

        setSalarys(res.data.data);
        setTotalCount(res.data.data.length);
        setPage(Math.ceil(res.data.data.length / pageItemCount)); // 193 / 10 => 19.3 => ceil(19.3) => 20
        setSalarys(res.data.data.slice(0, pageItemCount));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changePage = (i) => {
    debugger;
    setCurrentPage(i);
    const startItem = (i - 1) * pageItemCount + 1;
    setSalarys(salerys.slice(startItem, pageItemCount * i + 1));
  };
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Table Salery</h5>

          <TableChart salerys={salerys} page={page} />

          <div>
            <nav aria-label="...">
              <ul class="pagination">
                <Pagination
                  pageCount={page}
                  currentPage={currentPage}
                  changePage={changePage}
                />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleryList;

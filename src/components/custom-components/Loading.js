import React from "react";

const Loading = () => {
  return (
    <div>
      <button class="btn btn-warning" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading Your Request...
      </button>
    </div>
  );
};

export default Loading;

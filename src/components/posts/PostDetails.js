import React, { useState, useEffect } from "react";
import "../posts/PostDtails.css";

const PostDetails = ({ post }) => {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <blockquote className="blockquote blockquote-custom p-5 shadow rounded ">
                <div className="blockquote-custom-icon bg-info shadow-sm">
                  <i className="fa fa-quote-left text-white"></i>
                </div>
                <div class="blockquote-header pb-2 border-bottom">
                  <b>Title:</b>
                  <cite title="Source Title">
                    {" "}
                    <b>{post.title}</b>
                  </cite>
                </div>
                <p className="mb-0 mt-2 font-italic">
                  "{post.body}
                  ."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

import React, { useState, useEffect } from "react";
import "../posts/PostDtails.css";

const PostDetails = ({ post }) => {
  return (
    <div>
      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mx-auto">
              <div class="text-center pb-5">
                <h6 class="h6">{post.title}</h6>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 mx-auto">
              <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                <div class="blockquote-custom-icon bg-info shadow-sm">
                  <i class="fa fa-quote-left text-white"></i>
                </div>

                <p class="mb-0 mt-2 font-italic">
                  "{post.body}
                  ."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

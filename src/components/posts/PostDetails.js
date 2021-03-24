import React, { useState, useEffect } from "react";
import "../posts/PostDtails.css";

const PostDetails = () => {
  return (
    <div>
      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <div class="text-center pb-5">
                <h1 class="h2">Users posts</h1>
                <p>
                  There Is a Some Note Form Users
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 mx-auto">
              <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                <div class="blockquote-custom-icon bg-info shadow-sm">
                  <i class="fa fa-quote-left text-white"></i>
                </div>
                <p class="mb-0 mt-2 font-italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo{" "}
                  <a href="#" class="text-info">
                    @consequat
                  </a>
                  ."
                </p>
                <div class="blockquote-footer pt-4 mt-4 border-top">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

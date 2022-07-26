import React from "react";
import Avatar from "./Avatar";

export default function PostComponent(props){

    return(
        <div className="post">
            <div className="lin">
            <div className="lino" >
                <Avatar ></Avatar>    
            <div className="inf">User 1<sub className="sb">1hr ago</sub></div></div>
            <button class="btn btn-danger">Delete Post</button>
            <button class="btn btn-info">Remove</button>
            </div>
            <div class="cont">
                <h5>xxxx</h5>
            </div>
        </div>
    );
}
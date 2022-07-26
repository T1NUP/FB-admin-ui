import React,{useEffect} from "react";
import admin from "./assets/admin.jpeg" 
import { useNavigate } from 'react-router-dom';
import { Tooltip } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Logo from './assets/logo.png';
import Avatar from "./Avatar";
import PostComponent from "./PostComponent";

export default function Admin(){

    const navigate= useNavigate();

    const logout=()=>{
        navigate("/");
        sessionStorage.clear();
    }

    useEffect(()=>{
        if(sessionStorage.getItem("type")==0) navigate("/home")
        else if(sessionStorage.getItem("type")==1) navigate("/admin")
        else navigate("/");
    });

    return(<>
        {/* <h1>Hello Admin {sessionStorage.getItem("name")}</h1> */}
        {/* <img src={admin}></img> */}
        {/* <button className="logout" onClick={logout}>Logout</button> */}

        <Navbar expand={"md"} className="navbar navbar-expand-md navbar-dark bg-dark">
                <OverlayTrigger placement={"bottom"} overlay={<Tooltip id={"tooltip-bottom"}>Back to home</Tooltip>}><h3 className="nav-link" to="/welcome/"><img src={Logo} alt="Logo" className="rmitLogo"/></h3>
                    </OverlayTrigger>
                    <ul className="navbar-nav d-md-block d-none" style={{marginRight: "1.1rem"}}>
                        <h3 className="nav-link" to="/welcome/">Home</h3>
                    </ul>

                    <h1 className="nav-link gg" to="/welcome/">Admin Console</h1>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            <OverlayTrigger key={"bottom"} placement={"bottom"} overlay={<Tooltip id={'tooltip-bottom'}></Tooltip>}>
                                <li className={"toProfile"}>
                                    {/* <img src={Logo} alt="Logo" className="rmitLogo"/> */}
                                    {/* <a className="nav-link" href={'/profile/'}>Admin</a> */}
                                </li>
                            </OverlayTrigger>
                            <h3 className="nav-link d-md-none" to="/welcome/">Home</h3>

                            <li><div className="nav-link" name="logout" onClick={logout}>Logout</div></li>
                        </ul>

                    </Navbar.Collapse>

            </Navbar>


            <div className="post">
                <h2>Reported Posts</h2>
            </div>

            {
            [1,2,3].map((i)=><PostComponent />)
            }

            {/* <div className="post">
                <div className="lin">
                <div className="lino"><img src={Logo} alt="Logo" className="rmitLogo"/><div className="inf">User 2<sub className="sb">1hr ago</sub></div></div>
                <button class="btn btn-danger">Delete Post</button>
                <button class="btn btn-info">Remove</button>
                </div>
                <div class="cont">
                    <h5>sshjsfsehj</h5>
                </div>
            </div> */}


            
        </>
    );
}
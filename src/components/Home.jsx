import React,{useEffect} from "react";
import admin from "./assets/admin.jpeg" 
import { useNavigate } from 'react-router-dom';

export default function Home(){

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
        {/* <h1>Hello User {sessionStorage.getItem("name")}</h1> */}
        <img src={admin}></img>
        <button onClick={logout}>Logout</button>
        </>
    );
}
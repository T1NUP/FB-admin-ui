import React from "react";
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { register, validateLogin } from "../utils/ApiCalls";
import { useEffect } from "react";

export default function Register(){

    const navigate= useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState("");
    const [name, setName] = useState("");
    // const [city, setCity] = useState("");
    // const [phone, setPhone] = useState("");

    const change=(event)=>{
        if(event.target.id=='username'){
            setUsername(event.target.value);
        }
        if(event.target.id=='password'){
            setPassword(event.target.value);
        }
        if(event.target.id=='isAdmin'){
            setIsAdmin(event.target.value);
        }
        if(event.target.id=='name'){
            setName(event.target.value);
        }
        // if(event.target.id=='city'){
        //     setCity(event.target.value);
        // }
        // if(event.target.id=='phone'){
        //     setPassword(event.target.value);
        // }
    }

    const handleRegister=()=>{
        console.log("SUB:::", username, password);

        let body={
            userName: username,
            password,
            name,
            isAdmin
        }

        validateLogin(body).then((res)=>{
            if(res.data.length!=0){
                alert("Username alredy present, Try with another username");
            }else{

                register(body).then((res)=>{
                    navigate("/");
                    if(res.data==="Successfully registered")
                    {
                       
                        alert("Regestration Successful!!");
                    }
                    else{
                        alert("Something Went wrong!! try again");
                    }
                });

            }
        })
    }

    return(
        <div class="MainApp">
        <div class="App">
            <div class="LoginComponent">
                <div class="Description">
                    <h1>FRIENDBOOK</h1>
                </div>
                <div class="register">
                    <div class="container">
                        <div class="base-container">
                            <div class="content">
                            <form>
                                <fieldset class="form-group">
                                    <label for="name">Name</label>
                                    <input name="name" id="name" class="field" type="text"  value={name} onChange={change} />
                                </fieldset>
                                <fieldset class="form-group">
                                    <label for="username">Username</label>
                                    <input name="username" class="field" id="username" type="text"  value={username} onChange={change} />
                                </fieldset>
                                <fieldset class="form-group">
                                    <label for="password">Password</label>
                                    <input name="password" class="field" id="password" type="password" value={password} onChange={change} />
                                </fieldset>
                                <fieldset class="form-group">
                                    <label for="email">Type 1 if admin else type 0</label>
                                    <input name="email" class="field" id="isAdmin" type="number" min="0" max="1" value={isAdmin} onChange={change}/>
                                </fieldset>
                            </form>
                            <br/><br/><br/>
                            <Button variant="primary" type="submit" onClick={handleRegister}>
                                    Register
                            </Button>&nbsp;&nbsp;&nbsp;
                            <Button variant="primary" type="submit" onClick={()=>(navigate("/"))}>
                                Cancel
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}




















// <>
//         <Form className="login">
//             <h2>Login</h2>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control id="username" type="text"  value={username} onChange={change}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control id="password" type="password" value={password} onChange={change} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control id="name" type="text"  value={name} onChange={change}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Type 1 if admin else type 0</Form.Label>
//                     <Form.Control id="isAdmin" type="number" min="0" max="1" value={isAdmin} onChange={change}/>
//                 </Form.Group>
                
//         </Form>
//         <Button variant="primary" type="submit" onClick={handleRegister}>
//         Register
//     </Button>&nbsp;&nbsp;&nbsp;
//     <Button variant="primary" type="submit" onClick={()=>(navigate("/"))}>
//         Cancel
//     </Button></>
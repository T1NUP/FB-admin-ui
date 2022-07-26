import axios from 'axios';


export const validateLogin= async(data)=>{
    return await axios.post("http://localhost:7000/verification",data);
}

export const register= async(data)=>{
    return await axios.post("http://localhost:7000/registerUser",data);
}
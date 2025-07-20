import axios from 'axios';
import { getToken } from '../utils/storage.js';
import {toast} from 'react-toastify';

const API_URL='http://localhost:4000';

export const api=axios.create({
     baseURL:API_URL,
    headers:{
        'content-type':'application/json'
    }
});

api.interceptors.request.use(
    (config)=>{
        const token=getToken();
        if(token){
           config.headers.authorization=`Bearer ${token}`
        }
        return config;
    },
    (error)=>{
     toast.error(error || "request Error");
     return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (res)=>{
        console.log(API_URL);
          return res.data;
    },
    (error)=>{
        toast.error(error || "Something went wrong");
        return Promise.reject(error);
    }
)
   

import { api } from "./api.js";

export const signupService=(cred)=>{
    return api.post('auth/register',cred);
}

export const signinService=(cred)=>{
    return api.post('auth/login',cred);
}
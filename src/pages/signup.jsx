import { useState } from "react";
import { useError } from "../context/Errorcontext.jsx";
import { useAuth } from "../context/authcontext.jsx";

 function SignUp(){
    const {clearError,handleError}=useError();
    const {signup} = useAuth();
  

const [cred,setCred]=useState(
    {
        name:"",
        password:"",
        confirmpassword:""
    }
)
 async  function handleSubmit(e){
    e.preventDefault();
    console.log("cred:", cred);

    if(cred.password!==cred.confirmpassword){
       alert("password does not match");
       return;
    }try{
        await signup(cred);
        clearError();   

    }catch(error){
        handleError(error);

    }
    
}

return(
    <>
    <div className="flex justify-center items-start min-h-screen bg-gray-100 pt-20">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Signup</h1>
    <p className="text-sm text-center text-gray-600 mb-6">Create a new account</p>

    <form onSubmit={handleSubmit}>
      {/* Username Field */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username</label>
        <input
          type="text"
          id="username"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
          onChange={(e) => setCred({ ...cred, name:e.target.value })}
        />
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter password"
          onChange={(e) => setCred({ ...cred, password: e.target.value })}
        />
      </div>

      {/* Confirm Password Field */}
      <div className="mb-6">
        <label htmlFor="confirmpassword" className="block text-gray-700 font-medium mb-1">Confirm Password</label>
        <input
          type="password"
          id="confirmpassword"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Confirm password"
          onChange={(e) => setCred({ ...cred, confirmpassword: e.target.value })}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Signup
      </button>
    </form>

    {/* Login Link */}
    <p className="mt-4 text-center text-sm text-gray-600">
      Already have an account ? {' '}
      <a
        href="/login"
        className="text-blue-600 hover:underline"
      >
        Sign in here
      </a>
    </p>
  </div>
</div>

    </>
)


};

export {SignUp};
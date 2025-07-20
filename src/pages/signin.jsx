import { useState } from "react";
import { useError } from "../context/Errorcontext.jsx";
import { useAuth } from "../context/authcontext.jsx";


 function SignIn(){
    const {clearErro,handleError}=useError();
    const {signin} = useAuth();
    const [cred,setCred]=useState({
        name:"",
        password:""
    });

    async function handleSubmit(e) {
        e.preventDefault();
        try{
          await signin(cred);
          clearErro();
        }catch(error){
          handleError(error);
        }
        
    }

    return(
        <>
        <div className="flex justify-center items-start min-h-screen bg-gray-100 pt-20">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login Here</h1>
    
    <form onSubmit={handleSubmit}>
      {/* Username Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Username</label>
        <input
          id="name"
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
          onChange={(e) => setCred({ ...cred, name: e.target.value })}
        />
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
        <input
          id="password"
          type="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
          onChange={(e) => setCred({ ...cred, password: e.target.value })}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Sign In
      </button>
    </form>

    {/* Signup Link */}
    <p className="mt-4 text-center text-sm text-gray-600">
      Don’t have an account?{' '}
      <a href="/register" className="text-blue-600 hover:underline">
        Sign up here
      </a>
    </p>
  </div>
</div>

        </>

    )
};

export {SignIn};
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="">
      <div className=" bg-gray-100 flex flex-col text-center mt-20 max-w-md mx-auto my-auto rounded-xl">
        <div className="flex justify-center items-center">
          <FaTwitter className="text-center text-5xl text-blue-600 mt-6 mb-6" />
        </div>

        <h1 className=" font-bold text-2xl mb-5  ">Sign In to Twitter</h1>
        <div className="flex justify-center flex-col mx-auto ">
          <button className=" border border-gray-900 border-solid  py-2 w-80 flex justify-center mb-4  rounded-3xl">
            <FcGoogle className="flex justify-center text-center my-auto text-2xl" />
            <h2 className="ml-2"> Sign in with Google</h2>
          </button>
          <button className=" border border-gray-900 border-solid  py-2 w-80 flex justify-center rounded-3xl ">
            <FaApple className="flex justify-center text-center my-auto text-2xl" />
            <h2 className="ml-2 "> Sign in with Google</h2>
          </button>
        </div>

        <div className=" mt-4 flex flex-row m-auto justify-center text-center">
          <hr className="border-b-1 border-black w-32 m-auto mr-5" />
          <h3 className="first-line:">Or</h3>
          <hr className="border-b-1 border-black w-32 m-auto ml-5" />
        </div>

        <input
          type="text"
          placeholder="Phone Emain or username"
          className="w-80 m-auto py-2 rounded-md px-4 mt-4 border border-gray-800 hover:border-transparent"
        />
        <button className="w-80 bg-black text-white font-semibold text-lg m-auto mt-5 py-2 rounded-3xl">
          Next
        </button>
        <button className="bg-white w-80 m-auto mt-4 py-2 rounded-2xl text-md font-semibold border border-gray-400 mb-10">
          Forget Password
        </button>
        <h3 className="mb-10">Don't Have an account ? Sign Up</h3>
      </div>
    </div>
  );
};

export default Login;

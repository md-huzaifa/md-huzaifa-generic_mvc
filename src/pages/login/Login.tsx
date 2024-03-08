import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

import { InputField, Checkbox } from "@/components";
import { useAuth } from "@/context/AuthContext";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();

  const { setUserData } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const body = {
    //   email: email,
    //   password: password,
    // };
    setLoading(true);
    axios
      .post(
        "https://dummyjson.com/auth/login",
        JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
          // expiresInMins: 60, // optional
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setLoading(false);
        const userData = res.data;
        setUserData(userData);
        if (rememberMe) {
          window.localStorage.setItem("email", email);
          window.localStorage.setItem("password", password);
        } else {
          window.localStorage.removeItem("email");
          window.localStorage.removeItem("password");
        }
        window.localStorage.setItem("token", userData?.token);
        navigate("/");
      });
  };

  return (
    <div className="flex">
      <div className="my-16 flex h-full items-center justify-center md:mx-0 md:px-0 lg:mb-10 lg:items-center w-6/12">
        {/* Sign in section */}
        <div className="mt-[10vh] w-8/12 flex-col items-center md:pl-4 lg:pl-0">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 ">Sign In</h4>
          <p className="mb-6 ml-1 text-base text-gray-800">
            Enter your email and password to sign in!
          </p>
          <form onSubmit={handleLogin}>
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              name="email"
              placeholder="mail@simmmple.com"
              id="email"
              type="text"
              onChange={handleChange}
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Password*"
              name="password"
              placeholder="Min. 8 characters"
              id="password"
              type="password"
              onChange={handleChange}
            />
            {/* Checkbox */}
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="flex items-center">
                <Checkbox
                  checked={rememberMe}
                  onClick={() => setRememberMe((state) => !state)}
                />
                <p className="ml-2 text-sm font-medium text-navy-700 ">
                  Keep me logged In
                </p>
              </div>
              <a
                className="text-sm font-medium text-blue-500 hover:text-blue-600 "
                href=" "
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="linear mt-2 w-full rounded-xl bg-blue-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
          <div className="mt-4">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
              Not registered yet?
            </span>
            <a
              href=" "
              className="ml-1 text-sm font-medium text-blue-500 hover:text-blue-600 "
            >
              Create an account
            </a>

            <div className="my-6 flex items-center  gap-3">
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
              <p className="text-base text-gray-600 "> or </p>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </div>

            <div className="mb-6 flex h-[50px] w-full items-center justify-center border-gray-500 dark:border-none border gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-blue-500">
              <div className="rounded-full text-xl">
                <FcGoogle />
              </div>
              <h5 className="text-sm font-medium text-navy-700 dark:text-white">
                Sign In with Google
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="w-6/12 ">
        <div className="flex justify-center items-center h-screen bg-blue-100">
          <div className="text-center p-8 rounded ">
            <h1 className="font-bold text-2xl mb-4">
              Welcome to this landing page
            </h1>
            <p>
              This is a sample website showcasing the use of Tailwind CSS.
              Please login to visit the website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

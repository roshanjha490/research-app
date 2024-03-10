"use client"
import React from "react";
import Link from "next/link";
import SigninButton from "./SigninButton";
import AuthProviders from "./AuthProviders";
import { signIn } from "next-auth/react";

const Login = () => {

  const userLogin = async (e) => {

    const signInData = await signIn('credentials', {
      email: e.get("email"),
      password: e.get("password"),
      redirect: false
    })

    console.log(signInData)
  }

  return (
    <>
      <div className="w-full h-full pt-40">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <AuthProviders></AuthProviders>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-center mb-3 font-bold">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form onSubmit={userLogin}>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Email
                      </label>
                      <input
                        name="email"
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>

                    <div className="w-full h-auto grid grid-cols-2">

                      <div className="flex justify-start items-center">
                        <label className="inline-flex items-left cursor-pointer">
                          <input id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="flex justify-end items-center">
                        <Link href="/registration">
                          <span className="ml-2 text-sm font-semibold text-blueGray-600 underline hover:text-blueGray-800 hover:no-underline">
                            New Registration
                          </span>
                        </Link>
                      </div>

                    </div>

                    <div className="text-center mt-6">
                      <SigninButton></SigninButton>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6 relative">
                <div className="w-1/2">
                </div>
                <div className="w-1/2 text-right">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login

// export const metadata = {
//   title: "Login | Research Study",
//   description: "",
// };
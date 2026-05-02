'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Form, Label } from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const longInPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/"
        });


        if (error) {
            toast.error(error.message || 'login filed')
        }
        console.log({ email, password })

    }
  const handleGoogleAuth =async()=>{
        await authClient.signIn.social({
            provider:"google"
        })
  }

    return (
        <Form onSubmit={onSubmit} className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6 space-y-5 border border-gray-200">

            <h2 className="text-2xl font-bold text-center text-gray-800">
                Login Form
            </h2>
            <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                    Email Address
                </Label>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
            </div>

            <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                    Password
                </Label>
                <input
                    required
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300"
            >
                Log in
            </button>
            <div className="flex space-x-3 ">
                <h1>Don’t have an account?</h1>
                <Link className="text-blue-500 underline cursor-pointer" href='/singup'>
                    SignUp</Link>
            </div>
            <Button 
            onClick={handleGoogleAuth}
            variant="outline" className="w-full flex items-center justify-center gap-2">
                <FaGoogle />
                Log In with Google
            </Button>
        </Form>
    );
};

export default longInPage;
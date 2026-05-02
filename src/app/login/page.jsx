'use client'
import { authClient } from "@/lib/auth-client";
import { FieldError, Form, Label, TextField } from "@heroui/react";

const longInPage = () => {

    const onSubmit =async (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value

        const {data, error} = await authClient.signUp.email({
            name, 
            email, 
            password,
        });
        console.log({data, error})
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
                Submit
            </button>

        </Form>
    );
};

export default longInPage;
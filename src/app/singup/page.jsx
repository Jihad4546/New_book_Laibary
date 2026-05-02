'use client'
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const SingUpPage = () => {

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
        });
        if (data) {
            toast.success("SingUp Successful 🎉")
            router.push('/login')
        }
        if (error) {
            toast.error(error.message || "Signup failed")
        }
    }
    const handleGoogleAuth = async () => {
        await authClient.signIn.social({
            provider: "google"
        });
    }


    return (
        <Form onSubmit={onSubmit} className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6 space-y-5 border border-gray-200">

            <h2 className="text-2xl font-bold text-center text-gray-800">
                Registration Form
            </h2>

            <TextField className="space-y-2" isRequired name="name" type="text" >
                <Label className="text-sm font-medium text-gray-700">
                    Full Name
                </Label>
                <input
                    type="text"
                    required
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <FieldError></FieldError>
            </TextField>

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
            <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                    Image URL
                </Label>
                <input
                    required
                    type="text"
                    name="image"
                    placeholder="Enter your Image Url"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300"
            >
                SingUp
            </button>

            <div className="flex space-x-3">
                <h1> Already have an account? </h1>
                <Link href='/login'>
                    <Button className='text-blue-700 underline  cursor-pointer'>Log In</Button>
                </Link>
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

export default SingUpPage;
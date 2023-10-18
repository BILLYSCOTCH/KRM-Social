"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";



export default function SignUp() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    })

    const[buttonDisabled, setButtonDisabled] = React.useState(false);
    const[loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            toast.success("Signup successfully");

        } catch (error : any) {
            console.log("Signup failed", error.message)
            toast.error("Signup failed");

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.email.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])


    return (
        <div className="flex flex-col items-center justify-center 
        min-h-screen py-2 ">
            <div className="flex flex-col items-center justify-center border border-sky-500 rounded-lg p-6 relative">
                <div className="absolute top-2 left-2 text-lg font-semibold text-gray-700 ">    
                    <h1>{loading ? "Processing" : "SignUp"}</h1>
                </div>
            <div className="absolute top-2 right-2 text-lg font-semibold text-gray-700">
                <Link href="/login">Login</Link>
            </div>
            <hr className="w-full border-gray-300 mt-8 mb-5" />

        <div className="flex flex-col items-center relative py-8">
            <label htmlFor="username">username</label>
            <input
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
                className="p-2 border border-gray-300 rounded-lg mb-4
                focus:outline-none focus:border-indigo-500 text-black"
            />

            <label htmlFor="username">email</label>
            <input
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
                className="p-2 border border-gray-300 rounded-lg mb-4
                focus:outline-none focus:border-indigo-500 text-black"
            />

            <label htmlFor="username">password</label>
            <input
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
                className="p-2 border border-gray-300 rounded-lg mb-4
                focus:outline-none focus:border-indigo-500 text-black"
            />

            <button 
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg
            mb-4 focus:outline-none focus:border-gray-600">
                {buttonDisabled ? "No signup" : "Signup"}
            </button>

        </div>
            
            
            </div>
        </div>
    )
} 
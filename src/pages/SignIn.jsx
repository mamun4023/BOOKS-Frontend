import { Link, useNavigate } from "react-router-dom";
import { Axios } from "../utils/axios";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInHandler = (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        };
        Axios.post(`/user/sign-in`, data)
            .then((res) => {
                navigate("/home");
            })
            .catch((err) => {
                const errMsg = err?.response?.data?.message;
                toast.error(errMsg);
            });
    };

    return (
        <div className="h-screen flex justify-center  items-center">
            <div className="w-96  p-2 shadow-lg rounded-md">
                <form onSubmit={signInHandler}>
                    <div className="flex flex-col gap-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                className="input input-bordered w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="input input-bordered w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button className="btn btn-success text-white">Sign In</button>
                    </div>
                    <div className="my-2 text-[16px]">
                        <p className="text-gray-600 text-[14px]">
                            Don't you have account?
                            <Link className=" underline pl-2" to="/sign-up">
                                Sign-Up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );


}

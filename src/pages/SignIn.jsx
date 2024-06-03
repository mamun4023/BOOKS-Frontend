import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { ROUTES } from "../constants/route";
import { CONSTANT } from "../constants";
import { useSignInMutation } from "../redux/API";

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signIn] = useSignInMutation();

    const signInHandler = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        };

        try {
            await signIn(data).unwrap();
            navigate(ROUTES.HOME);
        } catch (err) {
            toast.error(err?.data?.message);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
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

                        <button className="btn btn-success text-white"> {CONSTANT.SIGNIN} </button>
                    </div>
                    <div className="my-2 text-[16px]">
                        <p className="text-gray-600 text-[14px]">
                            {CONSTANT.DONT_HAVE_ACCOUNT}
                            <Link className=" underline pl-2" to="/sign-up">
                                {CONSTANT.SIGNUP}
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

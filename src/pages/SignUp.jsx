import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Axios } from "../utils/axios";
import { toast } from "react-toastify";

export default function SignUp() {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUpHandler = (e) => {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            role,
            email,
            password,
        };

        Axios.post(`user/sign-up`, data)
            .then((res) => {
                const resMsg = res.data.message;
                toast.success(resMsg);
                navigate("/home");
            })
            .catch((err) => {
                const errMsg = err?.response?.data?.message;
                toast.error(errMsg);
            });
    };


    return (
        <div className=" h-screen flex justify-center  items-center">
            <div className="w-96 border-[1px] p-2 rounded-md  border-gray-200">
                <form onSubmit={signUpHandler}>
                    <div className="flex flex-col gap-4">
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                required
                                className="input input-bordered w-full"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Last Name"
                                required
                                className="input input-bordered w-full"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div>
                            <select
                                className="select select-bordered w-full"
                                onChange={(e) => setRole(e.target.value)}
                                value={role}
                            >
                                <option defaultValue={"user"} value={"user"}>
                                    User
                                </option>
                                <option value={"admin"}>Author</option>
                            </select>
                        </div>

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

                        <button className=" w-full btn btn-success text-white">Sign Up</button>
                    </div>
                    <div className="my-2 text-[16px]">
                        <p className="text-gray-600">
                            Do you have account?
                            <Link className=" underline pl-2" to="/sign-in">
                                Sign-in
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

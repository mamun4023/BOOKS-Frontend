import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../constants/route";
import { CONSTANT } from "../constants";
import { useSignUpMutation } from "../redux/API";

export default function SignUp() {
    const navigate = useNavigate();
    const [signUp] = useSignUpMutation();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUpHandler = async (e) => {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            email,
            password,
        };

        try {
            const resp = await signUp(data).unwrap();
            toast.success(resp?.data?.message);
            navigate(ROUTES.HOME);
        } catch (err) {
            toast.error(err?.data?.message);
        }
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

                        <button className=" w-full btn btn-success text-white">
                            {" "}
                            {CONSTANT.SIGNUP}{" "}
                        </button>
                    </div>
                    <div className="my-2 text-[16px]">
                        <p className="text-gray-600">
                            {CONSTANT.DO_YOU_HAVE_AN_ACCOUNT}
                            <Link className=" underline pl-2" to="/sign-in">
                                {CONSTANT.SIGNIN}
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

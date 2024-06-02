import { Axios } from "../utils/axios";
import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../constants/route";
import { CONSTANT } from "../constants";

export default function Navbar() {
    const navigate = useNavigate();

    const LogoutHandler = () => {
        Axios.post(ROUTES.LOGOUT).then(() => {
            navigate(ROUTES.SIGNIN);
        });
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={ROUTES.HOME} className="btn btn-ghost text-xl">
                    {CONSTANT.GOOGLE_BOOK}
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/profile" className="justify-between">
                                {CONSTANT.PROFILE}
                            </Link>
                        </li>
                        <li onClick={() => LogoutHandler()}>
                            <a>{CONSTANT.LOGOUT}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

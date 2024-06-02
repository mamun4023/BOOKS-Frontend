import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie'

export default  function App() {
   
    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes />
        </BrowserRouter>
    );
}

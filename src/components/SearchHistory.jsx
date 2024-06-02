import { useEffect, useState } from "react";
import { Axios } from "../utils/axios";

export default function SearchHistory() {
    const [hisroty, setHistory] = useState([]);

    const FetchHistory = () => {
        Axios.get("/me").then((res) => {
            const resData = res?.data?.data?.searchHistory;
            setHistory(resData);
        });
    };

    useEffect(() => {
        FetchHistory();
    }, []);

    const sortedData = hisroty.sort((a, b) => b - a);
    console.log(sortedData);

    return (
        <div className="mt-4">
            <h1 className=" text-xl font-bold">Search History</h1>
            <ul>
                {sortedData?.map((item, index) => (
                    <li
                        key={index}
                        className=" text-sm p-1 border-[1px] hover:bg-slate-100 my-1 rounded-lg "
                    >
                        {item?.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

import Navbar from "../components/Navbar";
import SearchHistory from "../components/SearchHistory";
import BookSearch from "./Book";

export default function Home() {
    return (
        <section className="max-w-5xl mx-auto p-4">
            <div className=" grid grid-cols-5">
                <div className=" col-span-1">
                    <SearchHistory />
                </div>
                <div className=" col-span-4">
                    <Navbar />
                    <BookSearch />
                </div>
            </div>
        </section>
    );
}

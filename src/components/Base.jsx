import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Base() {
    return (
        <>
            <Navbar />
            {/* <div className="pt-[480px]"> */}
            <Outlet />
            {/* </div> */}
            <Footer />
        </>
    )
}
import Header from "@/Components/Shared/Header";
import React from "react";
import Footer from "@/Components/Shared/Footer";

const Layout = ({ children }) => {
    return (
        <div className="">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
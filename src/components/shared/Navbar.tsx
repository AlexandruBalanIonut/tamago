import React from "react";

export default function Navbar() {
    return(
        <div className="w-100 bg-gray-50 fixed">
            <nav className="flex justify-between p-2">

                {/* Left side of the navbar */}
                <div className="flex">
                    <img className="mr-2" src="/assets/images/Tamago.svg" alt="Tamago logo" height="64px" width="64px" />
                    <h1 className="text-2xl font-semibold">Tamago</h1>
                </div>

            </nav>
        </div>
    );
}
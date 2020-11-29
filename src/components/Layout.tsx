import React from "react";
import LandingBanner from "./landing/LandingBanner";
import Navbar from "./shared/Navbar";

export default function Layout() {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <LandingBanner></LandingBanner>
            </main>
        </div>
    );
}
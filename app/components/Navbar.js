// Name: Josiane Nazaria De Souza
// Student ID: 200547851
// Email: 200547851@student.georgianc.on.ca

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
    return (
        <>
        <div className="w-full h-20 bg-emerald-800 sticky top-0 header">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <Logo />
                    <ul className="hidden md:flex gap-x-6 text-white">
                        <li>
                            <Link href="/">
                            <p>Home</p>
                            </Link>
                        </li>

                        <li>
                            <Link href="/about">
                            <p>About</p>
                            </Link>
                        </li>

                        <li>
                            <Link href="/resume">
                            <p>Resume</p>
                            </Link>
                        </li>

                        <li>
                            <Link href="/portfolio">
                            <p>Portfolio</p>
                            </Link>
                        </li>

                        <li>
                            <Link href="/movie_app">
                            <p>Movie</p>
                            </Link>
                        </li>

                        <li>
                            <Link href="/blog">
                            <p>Blog</p>
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/contact">
                            <p>Contact</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>        
        </>
    );
};
export default Navbar
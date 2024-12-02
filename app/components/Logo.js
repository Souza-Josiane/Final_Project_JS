// Name: Josiane Nazaria De Souza
// Student ID: 200547851
// Email: 200547851@student.georgianc.on.ca

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src="/Logo.png"
                width={80}
                height={80}
                loading="lazy"
                alt="Logo Dummy"
                style={{ cursor: "pointer" }}
            />
        </Link>
    )
}
// Name: Josiane Nazaria De Souza
// Student ID: 200547851
// Email: 200547851@student.georgianc.on.ca

"use client";
import Link from "next/link";
import styles from '/styles/Contact.module.css';
import Navbar from "../components/Navbar";
import Navfooter from "../components/Navfooter";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className={styles.contactContainer}>
                <h1 className={styles.h1}>Contact</h1>
                <form className={styles.form}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="3" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className={styles.btn}>Submit</button>
                </form>
            </div>
            <Navfooter />
        </>
    );
}
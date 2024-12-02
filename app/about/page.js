// Name: Josiane Nazaria De Souza
// Student ID: 200547851
// Email: 200547851@student.georgianc.on.ca

"use client";
import Link from "next/link";
import Image from "next/image";
import styles from '/styles/About.module.css';
import Navbar from "../components/Navbar";
import Navfooter from "../components/Navfooter";

export default function About() {
    return (

        <>
            <Navbar />
            <div className={styles.aboutContainer}>
                <div className={styles.profileSection}>
                    <Image
                        src="/profile.jpeg"
                        width={150}
                        height={150}
                        alt="Josiane Souza"
                        loading="lazy"
                        className={styles.profileImage} />
                    <div className={styles.bio}>
                        <h1 className={styles.h1}>About Me</h1>
                        <p>
                            Hello! I am Josiane, a passionate Back-end Developer with a keen interest in web development technologies like JavaScript, Next.js, and Express.js.
                            I thrive on solving complex problems and constantly enhancing my skills to build impactful solutions.
                        </p>
                        <p>
                            I have a strong foundation in back-end development, with experience in working with Java, JavaScript, Python, and relational databases.
                            Currently, I am deepening my knowledge of full-stack development with the goal of becoming a well-rounded developer.
                        </p>
                    </div>
                </div>

                <div className={styles.skillsSection}>
                    <h2 className={styles.h2}>Skills and Expertise</h2>
                    <div className={styles.skillsContainer}>
                        <ul className={styles.skillsAbout}>
                            <li>HTML 5 and CSS</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>Relational Database</li>
                        </ul>
                        <ul className={styles.skillsAbout}>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>React.js</li>
                        </ul>
                    </div>

                </div>

                <div className={styles.hobbiesSection}>
                    <h2 className={styles.h2}>Hobbies</h2>
                    <p>
                        Outside of coding, I enjoy spending quality time with my family at the park, reading about new technologies,
                        and engaging in outdoor activities like hiking and biking.
                    </p>
                </div>
                <div>
                    <p>
                        Feel free to check out my projects on <a href="https://github.com/Souza-Josiane" target="_blank" rel="noopener noreferrer">GitHub</a> or connect with me on <a href="https://www.linkedin.com/in/josianesouza/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                    </p>
                </div>
            </div>
            <Navfooter />
        </>
    );
}
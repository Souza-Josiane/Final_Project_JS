// Name: Josiane Nazaria De Souza
// Student ID: 200547851
// Email: 200547851@student.georgianc.on.ca

"use client";
import Link from "next/link";
import styles from '/styles/Resume.module.css';
import Navbar from "../components/Navbar";
import Navfooter from "../components/Navfooter";

export default function Resume() {
    return (

        <>
            <Navbar />
            <div className={styles.resumeContainer} aria-label="Resume Section">
                <div className={styles.resumeSection}>
                    <h2 className={styles.resumeHeader}>JOSIANE SOUZA</h2>
                    <p className={styles.resumeContent}>
                        Toronto, ON | (647) 928-5908 |
                        <Link href="mailto:josianensouza01@gmail.com"> josianensouza01@gmail.com</Link> |
                        <Link href="https://www.linkedin.com/in/josianesouza/" target="_blank"> LinkedIn</Link> |
                        <Link href="https://github.com/Souza-Josiane" target="_blank"> GitHub</Link> |
                        <a href="RESUME.pdf" download> Download my Resume</a>

                    </p>
                </div>

                <div className={styles.resumeSection}>
                    <section className={styles.sectionCareerObj}>
                        <h3 className={styles.resumeTitle}>CAREER OBJECTIVE</h3>
                        <p className={styles.resumeContent}>
                            Aspiring Computer Programming student with a strong track record of adaptability in both independent and
                            collaborative settings, dedicated to achieving top-notch outcomes. Actively seeking a Co-op position at a
                            prestigious company for May to August 2024 to leverage my adaptability, proficiency in computer programming,
                            and passion for continuous learning, while delivering outstanding results.
                        </p>
                    </section>
                </div>

                <div className={styles.resumeSection}>
                    <section className={styles.sectionSkills}>
                        <h3 className={styles.resumeTitle}>SKILLS</h3>
                        <div className={styles.skillsContainer}>
                            <ul className={styles.skillsList}>
                                <li><strong>Develops</strong>: Proficient in Java with ongoing learning in JavaFX, and familiar with Model-View-Controller (MVC).</li>
                                <li><strong>Programs</strong>: Programs in JavaScript, creating engaging user interfaces for web applications.</li>
                                <li><strong>Designs</strong>: Designs dynamic websites using HTML, CSS, and JavaScript to enhance user experiences.</li>
                                <li><strong>Node.js</strong>: Experience with Node.js for building scalable server-side applications.</li>
                            </ul>
                            <ul className={styles.skillsList}>
                                <li><strong>Optimizes</strong>: Optimizes website performance through advanced CSS techniques and efficient coding practices.</li>
                                <li><strong>Supports</strong>: Supports colleagues by providing technical assistance and guidance in challenging situations.</li>
                                <li><strong>Express.js</strong>: Knowledge of Express.js for building RESTful APIs and server-side applications.</li>
                                <li><strong>React.js</strong>: Skilled in building dynamic and interactive user interfaces with React.js.</li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div className={styles.resumeSection}>
                    <section className={styles.sectionEducation}>
                        <h3 className={styles.resumeTitle}>EDUCATION</h3>
                        <div className={styles.resumeEducation}>
                            <ul className={styles.education1}>
                                <li><strong>Diploma - Computer Programming</strong></li>
                                <li>Georgian at ILAC College, Toronto, ON</li>
                                <li>May 2023 – Expected Graduation Date: December 2024</li>
                            </ul>
                        </div>

                        <div className={styles.resumeEducation}>
                            <ul className={styles.education2}>
                                <li><strong>Bachelor’s in accounting</strong></li>
                                <li>Universidade Estácio de Sá, São Paulo/Brazil</li>
                                <li>August 2016 – July 2020</li>
                            </ul>
                        </div>

                        <div className={styles.resumeEducation}>
                            <ul className={styles.education3}>
                                <li><strong>Computer Technician</strong></li>
                                <li>ETEC - Escola Técnica Estadual De São Paulo, São Paulo/Brazil </li>
                                <li>August 2014 – December 2015</li>
                            </ul>
                        </div>

                    </section>
                </div>

                <div className={styles.resumeSection}>
                    <section className={styles.sectionWorkExperience}>
                        <h3 className={styles.resumeTitle}>WORK EXPERIENCE</h3>
                        <div className={styles.resumeExperience}>
                            <ul className={styles.experience1}>
                                <li><strong>Accounting Analyst</strong></li>
                                <li><strong>Simplificador Administração, São Paulo, SP/Brazil</strong></li>
                                <li><em>March 2020 - March 2023</em></li>
                            </ul>
                            <ul className={styles.resumeList}>
                                <li>Conducted accurate compilation and critical analysis of financial statements, ensuring compliance with accounting principles.</li>
                                <li>Recorded financial transactions meticulously, including accounts payable, accounts receivable, and payroll records, maintaining the integrity of accounting records.</li>
                                <li>Provided guidance and support to clients on accounting matters, interpreting regulations, policies, and procedures to optimize financial processes.</li>
                            </ul>
                        </div>
                        <div className={styles.resumeExperience}>
                            <ul className={styles.experience1}>
                                <li><strong>Accounting Internship</strong></li>
                                <li><strong>Simplificador Administração, São Paulo, SP/Brazil</strong></li>
                                <li><em>March 2019 - February 2020</em></li>
                            </ul>
                            <ul className={styles.resumeList}>
                                <li>Recorded financial transactions, including accounts payable, accounts receivable, and payroll records, ensuring accurate ledger entries.</li>
                                <li>Prepared and submitted tax returns, ensuring compliance with tax obligations, and maximizing tax benefits.</li>
                                <li>Maintained organized and up-to-date records of all financial transactions and related documentation.</li>
                            </ul>
                        </div>
                    </section>

                </div>

                <div className={styles.resumeSection}>
                    <section className={styles.sectionCertificates}>
                        <h3 className={styles.resumeTitle}>CERTIFICATES</h3>
                        <ul className={styles.resumeList}>
                            <li>
                                Worker Health and Safety Awareness in 4 Steps Certificate – issued by Ministry of Labour, Immigration, Training and Skills Development, June 2023.
                            </li>
                            <li>
                                Accessibility for Ontarians with Disabilities Act Certificate – issued by AODA, June 2023.
                            </li>
                            <li>
                                Hands-On Introduction: Java Certificate – issued by LinkedIn Learning.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <Navfooter />
        </>
    );
}
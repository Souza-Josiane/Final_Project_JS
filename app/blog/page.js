// Name: Josiane Nazaria De Souza
// Student ID: 200547851
// Email: 200547851@student.georgianc.on.ca

"use client";
import Link from "next/link";
import styles from '/styles/Blog.module.css';
import Navbar from "../components/Navbar";
import Navfooter from "../components/Navfooter";

export default function Blog() {
    return (

        <>
            <Navbar />

            <div className={styles.blogContainer}>
                {/* Article 1 */}
                <div className={styles.article}>
                    <h2 className={styles.h2}>Introduction to RESTful APIs: What You Need to Know</h2>
                    <img
                        src="article-1.png"
                        alt="RESTful API Illustration"
                        className={styles.articleImage}
                    />
                    <p>
                        APIs (Application Programming Interfaces) have become an essential part of modern web development. They allow different software applications to communicate with each other, making it possible to share data and services across platforms.
                    </p>
                    <p>
                        One of the most popular types of APIs is <strong>RESTful APIs</strong>. REST stands for <strong>Representational State Transfer</strong>. It is a set of guidelines for building scalable web services. REST APIs are widely used because they are lightweight, easy to use, and work seamlessly over HTTP.
                    </p>
                    <p>
                        <strong>Key Features of RESTful APIs:</strong>
                        <ul>
                            <li><strong>Stateless:</strong> Every request from a client to a server must contain all the information needed to understand and process the request.</li>
                            <li><strong>Client-Server Architecture:</strong> The client (user interface) and the server (data store) are separated, making the system more modular.</li>
                            <li><strong>Cacheable:</strong> Responses from a server can be explicitly labeled as cacheable or non-cacheable to improve performance.</li>
                            <li><strong>Uniform Interface:</strong> REST APIs follow a standard structure that simplifies the development process.</li>
                        </ul>
                    </p>
                </div>

                {/* Article 2 */}
                <div className={styles.article}>
                    <h2 className={styles.h2}>Why GraphQL is the Future of APIs</h2>
                    <img
                        src="article-2.png"
                        alt="GraphQL Illustration"
                        className={styles.articleImage}
                    />
                    <p>
                        While RESTful APIs have been the go-to for many developers, a new approach called <strong>GraphQL</strong> has gained a lot of attention. Developed by Facebook in 2012 and released as an open-source project in 2015, GraphQL is revolutionizing the way we query and manipulate data.
                    </p>
                    <p>
                        Unlike REST APIs, which require multiple requests to different endpoints for related data, GraphQL allows you to query exactly the data you need in a single request. This leads to faster applications and less bandwidth usage.
                    </p>
                    <p>
                        <strong>Key Benefits of GraphQL:</strong>
                        <ul>
                            <li><strong>Single Request for Complex Queries:</strong> You can retrieve all the related data in a single query rather than making multiple requests.</li>
                            <li><strong>Strongly Typed Schema:</strong> GraphQL uses a schema that defines types and operations, making it easier to understand and use.</li>
                            <li><strong>Real-Time Data with Subscriptions:</strong> With GraphQL, you can subscribe to changes in real-time, which is ideal for building modern applications like chat apps or live dashboards.</li>
                        </ul>
                    </p>
                </div>

                {/* Article 3 */}
                <div className={styles.article}>
                    <h2 className={styles.h2}>How APIs Enable the Internet of Things (IoT)</h2>
                    <img
                        src="article-3.png"
                        alt="Internet of Things Illustration"
                        className={styles.articleImage}
                    />
                    <p>
                        The <strong>Internet of Things (IoT)</strong> refers to the growing network of physical devices that connect to the internet. These devices, ranging from smart home gadgets to industrial machines, generate and exchange data constantly. To make this data exchange possible, APIs play a crucial role.
                    </p>
                    <p>
                        APIs enable IoT devices to communicate with each other and with central servers. They act as the middleman between devices and systems, allowing for seamless integration of different technologies.
                    </p>
                    <p>
                        <strong>How APIs Facilitate IoT:</strong>
                        <ul>
                            <li><strong>Interoperability:</strong> APIs allow devices from different manufacturers to communicate, regardless of their underlying technologies.</li>
                            <li><strong>Real-Time Data Exchange:</strong> IoT devices often need to send and receive data in real time. APIs make this possible by providing a fast, standardized way for devices to interact.</li>
                            <li><strong>Remote Control and Automation:</strong> With APIs, you can control IoT devices remotely and automate tasks. For example, you can use an API to adjust the temperature on your smart thermostat from your phone.</li>
                        </ul>
                    </p>
                </div>
            </div>

            <Navfooter />
        </>
    );
}
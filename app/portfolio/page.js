// Name: Josiane Nazaria De Souza
// Student ID: 200547851
// Email: 200547851@student.georgianc.on.ca

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from '/styles/Portfolio.module.css';
import Navbar from "../components/Navbar";
import Navfooter from "../components/Navfooter";

export default function Portfolio() {
    const [title, setTitle] = useState("");
    const [paragraph, setParagraph] = useState("");
    const [loading, setLoading] = useState(true);
    const [timezoneData, setTimezoneData] = useState(null);
    const [timezoneLoading, setTimezoneLoading] = useState(false);
    const [cityTimezone, setCityTimezone] = useState(""); // For timezone input
    const [cityWeather, setCityWeather] = useState(""); // For weather input
    const [weatherData, setWeatherData] = useState(null);
    const [weatherLoading, setWeatherLoading] = useState(false);
    const [timezoneError, setTimezoneError] = useState(""); // Error for timezone input
    const [weatherError, setWeatherError] = useState(""); // Error for weather input

    // Fetch scraper data
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/scraper");
            const data = await res.json();
            setTitle(data.title);  // Set the title
            setParagraph(data.paragraph);  // Set the first paragraph
            setLoading(false);
        };

        fetchData();
    }, []);

    // Handle city input change
    const handleTimezoneChange = (e) => {
        setCityTimezone(e.target.value); // Atualiza o estado de cityTimezone
    };

    const handleWeatherChange = (e) => {
        setCityWeather(e.target.value); // Atualiza o estado de cityWeather
    };

    // Fetch timezone data when user submits city
    const fetchTimezoneData = async (e) => {
        e.preventDefault();
        setTimezoneLoading(true);
        setTimezoneError(""); // Reset error for timezone form
    
        try {
            const res = await fetch(`http://worldtimeapi.org/api/timezone/${cityTimezone}`);
            if (!res.ok) {
                throw new Error('Timezone not found or invalid city.');
            }
            const data = await res.json();
            setTimezoneData(data);
        } catch (err) {
            setTimezoneError(err.message); // Set error message for timezone form
        } finally {
            setTimezoneLoading(false);
        }
    };

    const formatDatetime = (datetime) => {
        const date = new Date(datetime);
        return new Intl.DateTimeFormat('en-CA', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
        }).format(date);
    };

    const handleAnotherInputChange = (e) => {
        setAnotherInput(e.target.value);  // Atualiza o outro estado
    };

    // Fetch weather data when user submits city
    const fetchWeatherData = async (e) => {
        e.preventDefault();
        setWeatherLoading(true);
        setWeatherError(""); // Reset error for weather form
    
        try {
            const res = await fetch(`/api/weather?city=${cityWeather}`);
            if (!res.ok) {
                throw new Error('Weather data not found or invalid city.');
            }
            const data = await res.json();
            setWeatherData(data);
        } catch (err) {
            setWeatherError(err.message); // Set error message for weather form
        } finally {
            setWeatherLoading(false);
        }
    };

    // Format description to capitalize the first letter
    const formatDescription = (description) => {
        if (!description) return '';
        return description.charAt(0).toUpperCase() + description.slice(1);
    };


    return (
        <>
            <Navbar />
            <div className={styles.portfolioContainer}>
                <h1 className={styles.h1}>3 apps powered by APIs</h1>
                <p>Welcome to my portfolio! Below you can find some of the projects I have worked on.</p>

                <div className={styles.projects}>


                    {/* Web Scraper Project */}
                    <div className={styles.project}>
                        <h2 className={styles.h2}>Web Scraper</h2>
                        <p>This is a simple web scraper built with Next.js, scraping data from a website. Below are the results:</p>
                        <div className={styles.scraperSection}>
                            {loading ? (
                                <p className={styles.loading}>Loading...</p>
                            ) : (
                                <>
                                    <h3 className={styles.scraperTitle}>{title}</h3>
                                    <p className={styles.scraperParagraph}>{paragraph}</p>
                                </>
                            )}
                        </div>

                    </div>

                    {/* Timezone Section */}
                    <div className={styles.project}>
                        <h2 className={styles.h2}>Timezone Information</h2>
                        <p>This is a simple timezone API showing the current time in a selected timezone:</p>
                        <form onSubmit={fetchTimezoneData} className={styles.timezoneForm}>
                            <input
                                type="text"
                                value={cityTimezone}
                                onChange={handleTimezoneChange}
                                placeholder="Enter city or timezone"
                                className={styles.input}
                            />
                            <button type="submit" className={styles.btn}>Search</button>
                        </form>
                        <div className={styles.timezoneSection}>
                            {timezoneLoading ? (
                                <p className={styles.loading}>Loading...</p>
                            ) : timezoneError ? (
                                <p className={styles.error}>{timezoneError}</p>
                            ) : (
                                timezoneData && (
                                    <>
                                        <h3 className={styles.timezoneTitle}>{timezoneData.timezone}</h3>
                                        <p className={styles.timezoneDatetime}>
                                            {timezoneData.datetime ? formatDatetime(timezoneData.datetime) : 'No data available'}
                                        </p>
                                    </>
                                )
                            )}
                        </div>
                    </div>

                    {/* Weather Section */}
                    <div className={styles.project}>
                        <h2 className={styles.h2}>Weather Information</h2>
                        <p>This section shows the weather in the city you select:</p>
                        <form onSubmit={fetchWeatherData} className={styles.weatherForm}>
                            <input
                                type="text"
                                value={cityWeather}
                                onChange={handleWeatherChange}
                                placeholder="Enter city name"
                                className={styles.cityInput}
                            />
                            <button type="submit" className={styles.btn}>Search</button>
                        </form>
                        <div className={styles.weatherSection}>
                            {weatherLoading ? (
                                <p className={styles.loading}>Loading...</p>
                            ) : weatherError ? (
                                <p className={styles.error}>{weatherError}</p>
                            ) : (
                                weatherData && (
                                    <>
                                        <h3 className={styles.weatherCity}>{weatherData.name}</h3>
                                        <p className={styles.weatherDescription}>
                                            {formatDescription(weatherData.weather[0].description)}
                                        </p>
                                        <p className={styles.weatherTemperature}>
                                            {Math.round(weatherData.main.temp - 273.15)}°C
                                        </p>
                                    </>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Navfooter />
        </>
    );
}

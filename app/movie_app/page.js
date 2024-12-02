// app/movie_app/page.js
"use client";
import Link from "next/link";
import Image from "next/image";
import styles from '/styles/Home.module.css';
import Navbar from "../components/Navbar";
import { useState } from "react";
import Navfooter from "../components/Navfooter";

export default function Movie_app() {
    const [query, setQuery] = useState('');
    const [movie, setMovie] = useState(null);
    let API_KEY = '57e53664';

    const searchMovie = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`);
        const data = await res.json();
        setMovie(data);
    };
  
    return (
        <>
        <Navbar />
        <div>
            <h1>OMDB Movie Search</h1>
            <form onSubmit={searchMovie}>
                <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter movie title"
                required
                />
                <button type="submit">Search</button>
                </form>
                
                {movie && (
                    <div>
                        <h2>{movie.Title}</h2>
                        <p><strong>Year:</strong> {movie.Year}</p>
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Plot:</strong> {movie.Plot}</p>
                        <Image
                        src={movie.Poster}
                        width={150}
                        height={150}
                        alt={movie.Title} />
                    </div>
                )}
            </div>
            <Navfooter />
        </>
    );
}

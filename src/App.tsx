import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import MemeGallery from "./components/MemeGallery";
import AnimalCorner from "./components/AnimalCorner";
import DateNight from "./components/DateNight";
import OpenWhen from "./components/OpenWhen";
import { Heart, Moon, Sun } from "lucide-react";

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return (
                localStorage.getItem("theme") === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            );
        }
        return false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen bg-pink-50 text-gray-800 font-sans transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-pink-100 dark:border-pink-900 text-pink-500 dark:text-pink-400 hover:scale-110 derived-transition"
                aria-label="Toggle Dark Mode"
            >
                {darkMode ? (
                    <Sun className="w-6 h-6" />
                ) : (
                    <Moon className="w-6 h-6" />
                )}
            </button>

            <Hero />
            <DateNight />
            <MemeGallery />
            <OpenWhen />
            <AnimalCorner />

            <footer className="py-8 text-center text-pink-400 bg-white dark:bg-gray-900 border-t border-pink-100 dark:border-pink-900 flex justify-center items-center gap-2 transition-colors duration-300">
                <p className="flex items-center gap-2">
                    Made with <Heart className="w-4 h-4 fill-pink-400" /> for
                    Liv
                </p>
            </footer>
        </div>
    );
}

export default App;

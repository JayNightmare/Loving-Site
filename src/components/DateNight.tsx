import { useState } from "react";
import {
    Utensils,
    Moon,
    Camera,
    Music,
    Palmtree,
    Gamepad2,
    Shuffle,
} from "lucide-react";

const dateIdeas = [
    {
        icon: <Utensils className="w-6 h-6" />,
        text: "Pizza Making Night",
        color: "bg-red-100 text-red-500 dark:bg-red-900/50 dark:text-red-300",
    },
    {
        icon: <Moon className="w-6 h-6" />,
        text: "Stargazing",
        color: "bg-indigo-100 text-indigo-500 dark:bg-indigo-900/50 dark:text-indigo-300",
    },
    {
        icon: <Camera className="w-6 h-6" />,
        text: "Cute Photo Shoot",
        color: "bg-pink-100 text-pink-500 dark:bg-pink-900/50 dark:text-pink-300",
    },
    {
        icon: <Music className="w-6 h-6" />,
        text: "Bedroom Karaoke",
        color: "bg-purple-100 text-purple-500 dark:bg-purple-900/50 dark:text-purple-300",
    },
    {
        icon: <Palmtree className="w-6 h-6" />,
        text: "Indoor Picnic",
        color: "bg-green-100 text-green-500 dark:bg-green-900/50 dark:text-green-300",
    },
    {
        icon: <Gamepad2 className="w-6 h-6" />,
        text: "Video Game Marathon",
        color: "bg-blue-100 text-blue-500 dark:bg-blue-900/50 dark:text-blue-300",
    },
];

export default function DateNight() {
    const [date, setDate] = useState<(typeof dateIdeas)[0] | null>(null);
    const [spinning, setSpinning] = useState(false);

    const spin = () => {
        setSpinning(true);
        setDate(null);
        let count = 0;
        const interval = setInterval(() => {
            setDate(dateIdeas[Math.floor(Math.random() * dateIdeas.length)]);
            count++;
            if (count > 10) {
                clearInterval(interval);
                setSpinning(false);
            }
        }, 100);
    };

    return (
        <section className="py-20 bg-pink-50 dark:bg-gray-950 text-center transition-colors duration-300">
            <h2 className="text-4xl font-bold text-pink-500 dark:text-pink-400 mb-8 drop-shadow-sm flex items-center justify-center gap-3">
                Date Night Randomizer <Shuffle className="w-8 h-8" />
            </h2>

            <div className="flex flex-col items-center gap-8">
                <button
                    onClick={spin}
                    disabled={spinning}
                    className="bg-white dark:bg-gray-800 text-pink-500 dark:text-pink-400 font-bold py-4 px-8 rounded-full shadow-lg border-2 border-pink-200 dark:border-pink-900 hover:scale-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                    <Shuffle
                        className={`w-5 h-5 ${spinning ? "animate-spin" : ""}`}
                    />
                    {spinning
                        ? "Finding the perfect date..."
                        : "Spin for a Date!"}
                </button>

                {date && (
                    <div
                        className={`transform transition-all duration-500 ${spinning ? "scale-90 opacity-50" : "scale-100 opacity-100"}`}
                    >
                        <div
                            className={`p-8 rounded-3xl shadow-xl flex flex-col items-center gap-4 ${date.color} border-4 border-white dark:border-gray-800`}
                        >
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                                {date.icon}
                            </div>
                            <h3 className="text-2xl font-bold">{date.text}</h3>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

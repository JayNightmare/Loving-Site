import { useEffect, useState } from "react";
import { Smile, Loader2 } from "lucide-react";

interface Meme {
    postLink: string;
    subreddit: string;
    title: string;
    url: string;
    author: string;
    ups: number;
}

interface MemeResponse {
    count: number;
    memes: Meme[];
}

export default function MemeGallery() {
    const [memes, setMemes] = useState<Meme[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://meme-api.com/gimme/wholesomememes/9")
            .then((res) => res.json())
            .then((data: MemeResponse) => {
                setMemes(data.memes);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch memes:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="py-20 bg-pink-50 dark:bg-gray-950 transition-colors duration-300">
            <h2 className="text-4xl text-center font-bold text-pink-500 dark:text-pink-400 mb-10 drop-shadow-sm flex items-center justify-center gap-3">
                Daily Dose of Memes{" "}
                <Smile className="w-10 h-10 text-pink-500 dark:text-pink-400 animate-bounce" />
            </h2>

            <div className="container mx-auto px-4">
                {loading ? (
                    <div className="flex justify-center">
                        <Loader2 className="w-12 h-12 text-pink-500 animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                        {memes.map((meme, i) => (
                            <a
                                href={meme.postLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={i}
                                className={`block bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:rotate-0 ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                            >
                                <div className="overflow-hidden rounded-xl aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                    <img
                                        src={meme.url}
                                        alt={meme.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-3">
                                    <p className="text-center text-pink-500 dark:text-pink-300 font-medium truncate">
                                        {meme.title}
                                    </p>
                                    <p className="text-center text-gray-400 text-xs mt-1">
                                        u/{meme.author}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Dog, Cat, Heart } from "lucide-react";

export default function AnimalCorner() {
    const [petted, setPetted] = useState(0);
    const [catUrl, setCatUrl] = useState<string>("");
    const [dogUrl, setDogUrl] = useState<string>("");

    useEffect(() => {
        // Fetch a real random cat
        fetch("https://api.thecatapi.com/v1/images/search")
            .then((res) => res.json())
            .then((data) => setCatUrl(data[0].url))
            .catch(() => setCatUrl("https://placekitten.com/400/400")); // Fallback

        // Fetch a real random dog - fixed URL
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => setDogUrl(data.message))
            .catch(() =>
                setDogUrl(
                    "https://images.dog.ceo/breeds/retriever-golden/n02099601_10.jpg",
                ),
            ); // Fallback
    }, []);

    const handlePet = (e: React.MouseEvent<HTMLDivElement>) => {
        setPetted((p) => p + 1);

        // Trigger confetti from the click position
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        confetti({
            particleCount: 30,
            spread: 70,
            origin: { x, y },
            colors: ["#ec4899", "#fce7f3", "#fbcfe8"], // Pink shades
            disableForReducedMotion: true,
        });
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
            {/* Decorative circles */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-pink-100 dark:bg-pink-900/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

            <h2 className="text-4xl text-center font-bold text-pink-500 dark:text-pink-400 mb-10 drop-shadow-sm flex items-center justify-center gap-3">
                Cute Animal Corner <Dog className="w-8 h-8" />{" "}
                <Cat className="w-8 h-8" />
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                <div
                    className="text-center group cursor-pointer transition-transform hover:-translate-y-2 relative"
                    onClick={handlePet}
                >
                    <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg transform transition-transform group-hover:scale-105 group-active:scale-95 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        {catUrl ? (
                            <img
                                src={catUrl}
                                className="w-full h-full object-cover"
                                alt="Real Cute Cat"
                            />
                        ) : (
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
                        )}
                    </div>
                    <p className="mt-4 text-pink-400 font-bold text-lg group-hover:text-pink-600 dark:text-pink-400 dark:group-hover:text-pink-300 flex items-center justify-center gap-2">
                        Pat me! <Cat className="w-5 h-5" />
                    </p>
                </div>
                <div
                    className="text-center group cursor-pointer transition-transform hover:-translate-y-2 relative"
                    onClick={handlePet}
                >
                    <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg transform transition-transform group-hover:scale-105 group-active:scale-95 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        {dogUrl ? (
                            <img
                                src={dogUrl}
                                className="w-full h-full object-cover"
                                alt="Real Cute Dog"
                            />
                        ) : (
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
                        )}
                    </div>
                    <p className="mt-4 text-pink-400 font-bold text-lg group-hover:text-pink-600 dark:text-pink-400 dark:group-hover:text-pink-300 flex items-center justify-center gap-2">
                        No, pat me! <Dog className="w-5 h-5" />
                    </p>
                </div>
            </div>
            <div className="h-20 flex items-center justify-center mt-8">
                {petted > 0 && (
                    <p className="text-3xl text-pink-600 dark:text-pink-500 font-bold animate-bounce flex items-center gap-2">
                        You gave {petted} pats!{" "}
                        <Heart className="fill-pink-600 dark:fill-pink-500" />
                    </p>
                )}
            </div>
        </section>
    );
}

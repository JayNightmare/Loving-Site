import { useState } from "react";
import { Mail, Sun, CloudRain, Heart, Smile } from "lucide-react";

const letters = [
    {
        id: 1,
        icon: <Smile className="w-8 h-8 text-yellow-500" />,
        label: "Open When You're Happy",
        color: "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-700",
        message:
            "I'm so glad you're happy! Your smile lights up my whole world. Keep shining bright!",
    },
    {
        id: 2,
        icon: <CloudRain className="w-8 h-8 text-blue-500" />,
        label: "Open When You're Sad",
        color: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-700",
        message:
            "I'm sorry you're feeling down. Remember that I love you more than anything and this feeling will pass. I'm here for you.",
    },
    {
        id: 3,
        icon: <Heart className="w-8 h-8 text-red-500" />,
        label: "Open When You Miss Me",
        color: "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-700",
        message:
            "I miss you too! Close your eyes and imagine a big hug from me. We'll be together again soon.",
    },
    {
        id: 4,
        icon: <Sun className="w-8 h-8 text-orange-500" />,
        label: "Open When It's Morning",
        color: "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-700",
        message:
            "Good morning sunshine! I hope you have the most amazing day today. You deserve it!",
    },
];

export default function OpenWhen() {
    const [openLetter, setOpenLetter] = useState<(typeof letters)[0] | null>(
        null,
    );

    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <h2 className="text-4xl text-center font-bold text-pink-500 dark:text-pink-400 mb-12 drop-shadow-sm flex items-center justify-center gap-3">
                Open When... <Mail className="w-8 h-8" />
            </h2>

            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {letters.map((letter) => (
                    <div
                        key={letter.id}
                        onClick={() => setOpenLetter(letter)}
                        className={`cursor-pointer rounded-2xl border-2 p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg ${letter.color}`}
                    >
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-sm transition-colors">
                            {letter.icon}
                        </div>
                        <h3 className="font-bold text-gray-700 dark:text-gray-200 text-lg text-center">
                            {letter.label}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {openLetter && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={() => setOpenLetter(null)}
                >
                    <div
                        className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl animate-bounce-slow relative overflow-hidden transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className={`absolute top-0 left-0 w-full h-2 ${openLetter.color.split(" ")[0].replace("bg-", "bg-")}`}
                        ></div>

                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-full transition-colors">
                                {openLetter.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                {openLetter.label}
                            </h3>

                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                                "{openLetter.message}"
                            </p>

                            <button
                                onClick={() => setOpenLetter(null)}
                                className="mt-4 px-6 py-2 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-300 font-bold rounded-full hover:bg-pink-200 dark:hover:bg-pink-900 transition-colors"
                            >
                                Close Letter
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

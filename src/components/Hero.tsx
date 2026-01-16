import { Heart, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-950 transition-colors duration-300">
            <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-[2px]"></div>
            <div className="relative z-10 text-center p-12 bg-white/60 dark:bg-gray-900/60 rounded-3xl shadow-xl border border-white/50 dark:border-white/10 backdrop-blur-md animate-bounce-slow max-w-2xl mx-4 transition-colors duration-300">
                <div className="absolute -top-6 -left-6 text-yellow-400 animate-spin-slow">
                    <Sparkles size={48} />
                </div>
                <div className="absolute -bottom-6 -right-6 text-yellow-400 animate-pulse">
                    <Sparkles size={48} />
                </div>

                <h1 className="text-6xl md:text-7xl font-extrabold text-pink-500 dark:text-pink-400 drop-shadow-sm mb-6 flex items-center justify-center gap-4">
                    Hey Liv!{" "}
                    <Heart className="w-16 h-16 text-pink-500 fill-pink-500 animate-pulse" />
                </h1>
                <p className="text-2xl text-pink-400 dark:text-pink-300 font-medium font-sans italic hover:scale-105 transition-transform cursor-default">
                    Welcome to your personal corner of the internet!
                </p>
            </div>
        </section>
    );
}

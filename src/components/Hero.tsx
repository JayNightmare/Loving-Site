import heroBg from "../assets/hero_bg.png";

export default function Hero() {
    return (
        <section
            className="relative h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
            <div className="relative z-10 text-center p-8 bg-white/60 rounded-3xl shadow-xl border border-white/50 backdrop-blur-md animate-bounce-slow">
                <h1 className="text-6xl font-extrabold text-pink-500 drop-shadow-sm mb-4">
                    Hey Liv! 💖
                </h1>
                <p className="text-xl text-pink-400 font-medium font-sans">
                    Welcome to your personal corner of the internet!
                </p>
            </div>
        </section>
    );
}

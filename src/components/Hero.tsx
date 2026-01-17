import { Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const floatingImages = [
    // KennysGifs from Giphy (Stickers for transparent bg)
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q5dnEzMnN0bW5iaTMwbG5ndTJsa3hodmI5eHFqbjRveTN0MW5pbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GCi8AiDxe1hcEMFMMg/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXR1dGt0d3dvY2FiNWF4cmVrZ3llcWdtMGVudzhqNjVqem02bGswOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fc0glzAjfjsaV0IfUQ/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXR1dGt0d3dvY2FiNWF4cmVrZ3llcWdtMGVudzhqNjVqem02bGswOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Zap6W7a0uSBGHmzdNA/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXR1dGt0d3dvY2FiNWF4cmVrZ3llcWdtMGVudzhqNjVqem02bGswOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zb8pfmGVvOu2xGpHm0/giphy.gif",

    // USER PHOTOS
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
];

interface FloatingElementProps {
    src: string;
    index: number;
}

const FloatingElement = ({ src, index }: FloatingElementProps) => {
    const [randomStats] = useState(() => {
        return {
            x: Math.random() * 100,
            y: Math.random() * 100,
            rotation: Math.random() * 360,
            scale: 0.5 + Math.random() * 0.5,
            duration: 10 + Math.random() * 10,
            delay: Math.random() * 5,
        };
    });

    useEffect(() => {
        // Add keyframes for the float animation if not globally defined
        if (!document.getElementById("float-keyframes")) {
            const styleSheet = document.createElement("style");
            styleSheet.id = "float-keyframes";
            styleSheet.type = "text/css";
            styleSheet.innerText = `
                @keyframes float {
                    0% {
                        transform: translate(-50%, -50%) rotate(0deg) scale(var(--scale));
                    }
                    50% {
                        transform: translate(-50%, -50%) rotate(180deg) scale(var(--scale));
                    }
                    100% {
                        transform: translate(-50%, -50%) rotate(360deg) scale(var(--scale));
                    }
                }
            `;
            document.head.appendChild(styleSheet);
        }
    }, []);

    return (
        <img
            id={`floating-element-${index}`}
            src={src}
            alt={`floating-element-${index}`}
            className="absolute w-24 h-24 object-contain pointer-events-none z-0"
            style={
                {
                    left: `${randomStats.x}vw`,
                    top: `${randomStats.y}vh`,
                    "--scale": randomStats.scale, // Use CSS variable for scale
                    transform: `translate(-50%, -50%) rotate(${randomStats.rotation}deg) scale(${randomStats.scale})`,
                    animation: `float ${randomStats.duration}s ease-in-out ${randomStats.delay}s infinite alternate`,
                } as React.CSSProperties
            }
        />
    );
};

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-950 transition-colors duration-300 overflow-hidden">
            {/* Floating Background Elements */}
            {floatingImages.map((src, i) => (
                <FloatingElement key={i} src={src} index={i} />
            ))}

            <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-[2px] z-0"></div>
            <div className="relative z-10 text-center p-12 bg-white/60 dark:bg-gray-900/60 rounded-3xl shadow-xl border border-white/50 dark:border-white/10 backdrop-blur-md animate-bounce-slow max-w-2xl mx-4 transition-colors duration-300">
                <div className="absolute -top-6 -left-6 text-yellow-400 animate-spin-slow">
                    <Sparkles size={48} />
                </div>
                <div className="absolute -bottom-6 -right-6 text-yellow-400 animate-pulse">
                    <Sparkles size={48} />
                </div>

                <h1 className="text-6xl md:text-7xl font-extrabold text-pink-500 dark:text-pink-400 drop-shadow-sm mb-6 flex items-center justify-center gap-4">
                    Hey Ivvv!{" "}
                    <Heart className="w-16 h-16 text-pink-500 fill-pink-500 animate-pulse" />
                </h1>
                <p className="text-2xl text-pink-400 dark:text-pink-300 font-medium font-sans italic hover:scale-105 transition-transform cursor-default">
                    Welcome to your stinky corner of the internet!
                </p>
            </div>
        </section>
    );
}

// Removed duplicate FloatingElement definition

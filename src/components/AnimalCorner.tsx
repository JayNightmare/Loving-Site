import { useState } from "react";
import cuteCat from "../assets/cute_cat.png";
import cuteDog from "../assets/cute_dog.png";

export default function AnimalCorner() {
    const [petted, setPetted] = useState(0);

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-pink-100 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl -z-10"></div>

            <h2 className="text-4xl text-center font-bold text-pink-500 mb-10 drop-shadow-sm">
                Cute Animal Corner 🐾
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                <div
                    className="text-center group cursor-pointer transition-transform hover:-translate-y-2"
                    onClick={() => setPetted((p) => p + 1)}
                >
                    <img
                        src={cuteCat}
                        className="w-64 h-64 object-contain drop-shadow-lg transition-transform group-hover:scale-110 group-active:scale-90"
                        alt="Cute Cat"
                    />
                    <p className="mt-4 text-pink-400 font-bold text-lg group-hover:text-pink-600">
                        Pat me!
                    </p>
                </div>
                <div
                    className="text-center group cursor-pointer transition-transform hover:-translate-y-2"
                    onClick={() => setPetted((p) => p + 1)}
                >
                    <img
                        src={cuteDog}
                        className="w-64 h-64 object-contain drop-shadow-lg transition-transform group-hover:scale-110 group-active:scale-90"
                        alt="Cute Dog"
                    />
                    <p className="mt-4 text-pink-400 font-bold text-lg group-hover:text-pink-600">
                        No, pat me!
                    </p>
                </div>
            </div>
            <div className="h-20 flex items-center justify-center mt-8">
                {petted > 0 && (
                    <p className="text-3xl text-pink-600 font-bold animate-bounce">
                        You gave {petted} pats! ❤️
                    </p>
                )}
            </div>
        </section>
    );
}

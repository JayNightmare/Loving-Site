import Hero from "./components/Hero";
import MemeGallery from "./components/MemeGallery";
import AnimalCorner from "./components/AnimalCorner";

function App() {
    return (
        <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
            <Hero />
            <MemeGallery />
            <AnimalCorner />

            <footer className="py-8 text-center text-pink-400 bg-white border-t border-pink-100">
                <p>Made with ❤️ for Liv</p>
            </footer>
        </div>
    );
}

export default App;

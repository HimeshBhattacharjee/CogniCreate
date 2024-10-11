"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    const heroText = "CogniCreate";
    const lettersArray = heroText.split("");
    setLetters(lettersArray);
  }, []);

  return (
    <div className="m-0">
      <header
        className="bg-sky-100 h-screen flex flex-col justify-between items-center p-2 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://karnavatiuniversity.edu.in/wp-content/uploads/2024/06/How-Generative-AI-is-Creating-Never-Before-Seen-Content.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <nav className="flex justify-between items-center w-full p-5 fixed top-0 bg-gradient-to-b from-primary to-transparent bg-opacity-100 z-50">
          <div className="flex items-center justify-center">
            <img
              src="/Logo.png"
              className="w-[60px] h-[60px] object-cover mr-2"
              alt="CogniCreate Logo"
            />
            <h1 className="text-3xl text-white font-bold">CogniCreate</h1>
          </div>
          <ul className="flex list-none m-0">
            <li className="ml-5">
              <a
                href="#about"
                className="text-white text-lg font-bold transition-colors hover:text-indigo-300"
              >
                About Us
              </a>
            </li>
            <li className="ml-5">
              <a
                href="#contact"
                className="text-white text-lg font-bold transition-colors hover:text-indigo-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center mt-40 min-w-screen relative z-10">
          <h1
            className="text-8xl mb-7 font-bold text-indigo-400"
          >
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`text-transparent bg-clip-text bg-gradient-to-t from-indigo-500 to-purple-400 transition-all duration-1000 transform opacity-0 translate-y-10`}
                style={{
                  animation: `fadeInUp 0.5s ease forwards ${index * 0.1}s`,
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <motion.p
            className="text-white text-xl mb-4"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          >
            Create amazing content with AI, tailored just for you!
          </motion.p>
          <div>
            <Button
              className="m-16 bg-transparent border-[2px] text-white text-md font-bold p-6 rounded-full transition-colors
              hover:bg-gradient-to-tl from-purple-600 to-primary hover:text-violet-200 hover:border-none duration-800"
              onClick={handleGoToDashboard}>
              Let's Get Started
            </Button>
          </div>
        </div>
      </header>

      <section id="about" className="max-w-screen-lg mx-auto my-12 px-4 md:px-8">
        <h1 className="text-5xl font-bold mb-6 text-center mt-20">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400">
            CogniCreate
          </span>
        </h1>
        <p className="text-md mb-4 text-center">
          Welcome to CogniCreate - where creativity meets AI innovation! Our mission
          is to empower creators, businesses, and individuals with cutting-edge AI
          tools that streamline content creation, allowing for faster, more accurate,
          and imaginative results.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-500 to-purple-300">
          What CogniCreate Provides
        </h2>
        <ul className="list-disc list-inside mb-4 text-pretty mt-8 ml-10">
          <li className="mb-2">
            <strong>Automated Content Generation:</strong> Create blogs, articles, and
            reports with the help of our AI-driven tools.
          </li>
          <li className="mb-2">
            <strong>AI-Powered Editing:</strong> Get assistance with editing and
            proofreading, ensuring error-free content.
          </li>
          <li className="mb-2">
            <strong>SEO Optimization:</strong> Produce content optimized for search
            engines to enhance visibility and reach.
          </li>
          <li className="mb-2">
            <strong>Custom Templates:</strong> Tailored templates for various
            industries and content types.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-500 to-purple-300">
          Key Features
        </h2>
        <ul className="list-disc list-inside mb-4 text-pretty mt-8 ml-10">
          <li className="mb-2">
            <strong>Seamless User Experience:</strong> Easy-to-use platform to create
            content effortlessly.
          </li>
          <li className="mb-2">
            <strong>Wide Range of Industries:</strong> From blogs to technical reports,
            CogniCreate adapts to any content type.
          </li>
          <li className="mb-2">
            <strong>Fast and Efficient:</strong> Generate content quickly while
            maintaining quality and precision.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-500 to-purple-300">
          Why Choose CogniCreate?
        </h2>
        <p className="text-md mb-4 text-pretty mt-8 text-center">
          At CogniCreate, we aim to revolutionize content creation by providing
          seamless, fast, and efficient AI solutions. Join us and explore how AI can
          transform the way you create, letting you focus on strategy and creativity
          while we handle the technical aspects.
        </p>
      </section>

      <footer id="contact" className="bg-gradient-to-t from-primary to-transparent text-white text-center py-8">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-14">
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href="https://github.com/HimeshBhattacharjee" className="hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/himeshbhattacharjee/" className="hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All rights reserved by CineZone</p>
          </aside>
        </div>
      </footer>
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
          opacity: 0;
          transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
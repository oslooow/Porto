import Nav from "../components/nav";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Landing() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [location]);
  return (
    <div className="relative h-screen w-screen p-10 bg-zinc-900">
      <div
        className="h-full w-full bg-zinc-800 border rounded-lg"
        style={{
          backgroundImage: "url('src/assets/background.gif')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Nav />
      </div>
      <div
        className={`loading:opacity-0 transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute bottom-10 right-10 p-10 text-right h-80vh overflow-y-auto w-1/5">
          <h2 className="text-white text-4xl mb-4 text-left">
            <br />
            I'm a proficient web developer with skills in:
            <br />
            HTML, CSS, JavaScript, React, React Native, Vue, Tailwind, MongoDB,
            and other related technologies.
            <br />
            <br />
            I have a passion for creating user-friendly and interactive web
            applications that provide excellent user experiences. Apart from my
            technical skills, I'm also highly skilled in teamwork and can work
            efficiently under pressure.
            <br />
            <br />I enjoy working collaboratively with colleagues to achieve
            shared goals, and I'm always willing to learn and share my knowledge
            with others. Overall, I'm a dedicated and enthusiastic web developer
            who is committed to delivering high-quality work and achieving
            excellent results.
          </h2>
        </div>
      </div>
    </div>
  );
}

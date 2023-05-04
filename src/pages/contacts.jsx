import Nav from "../components/nav";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Contacts() {
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
Contacts
          </h2>
        </div>
      </div>
    </div>
  );
}

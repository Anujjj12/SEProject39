import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(token ? true : false);

  }, []);

  const handleAuth = () => {
    if (isLoggedIn) {
      console.log("Logging out...");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.clear();

      setIsLoggedIn(false);
      navigate("/login");
    } else {
      navigate("/login");
      // window.location.reload();
    }
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">My Website</h1>
      <button
        onClick={handleAuth}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
}

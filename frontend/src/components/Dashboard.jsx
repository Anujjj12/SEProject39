import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Dashboard() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const user = useAuth(); 

  useEffect(() => {
    if (user) {
      setUserName(user.name);
    }
    
  }, [user]);

  return (
    <div>
      {userName}
    </div>

    // <div className="border border-red-300">Content goes here</div>
  );
}

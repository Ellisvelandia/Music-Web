import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Library = lazy(() => import("../library/Library"));
const Feed = lazy(() => import("../feed/Feed"));
const Trending = lazy(() => import("../trending/Trending"));
const Player = lazy(() => import("../player/Player"));
const Favorite = lazy(() => import("../favorite/Favorite"));
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Login from "../../auth/Login";
import { useState } from "react";
import { useEffect } from "react";
import { setClientToken } from "../../spotify";

// Then, wrap the Routes with Suspense:
const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);


  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setToken("");
  }

  return !token ? (
    <Login />
  ) : (
    <BrowserRouter>
      <div className="main-body">
        <Sidebar handleLogout={handleLogout}/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default Home;

/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import SidebarButton from "./SidebarButton";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import "./sidebar.css";
import apiClient from "../../spotify";

const Sidebar = ({ handleLogout }) => {
  const [image, setImage] = useState(
    "https://i.pinimg.com/736x/fb/3d/43/fb3d437f3f49ef0fa435a3394227d341.jpg"
  );

  useEffect(() => {
    apiClient.get("me").then((res) => {
      setImage(res.data.images[0].url);
    });
  }, []);

  return (
    <div className="sidebar-container">
      <img src={image} alt="Profile image" className="profile-img" />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <button className="btn-logout" onClick={handleLogout}>
        <FaSignOutAlt />
      </button>
    </div>
  );
};

export default Sidebar;

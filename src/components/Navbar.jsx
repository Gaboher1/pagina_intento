import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCogs,
  FaRoute,
  FaQuestion,
  FaChartLine,
  FaShieldAlt
} from "react-icons/fa";

// 🔵 LOGO
import logoDoc from "../assets/logo_doc.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const items = [
  { label: "Inicio", icon: <FaHome />, path: "/" },
  { label: "Quiénes Somos", icon: <FaUser />, path: "/quienes-somos" },
  
  // 🔹 Ahora Proceso es el tercero
  { label: "Proceso", icon: <FaRoute />, path: "/proceso" },

  { label: "Servicios", icon: <FaCogs />, path: "/servicios" },
  { label: "FAQ", icon: <FaQuestion />, path: "/faq" },

  // 🌿 ICONOS VERDES
  {
    label: "Análisis",
    icon: <FaChartLine />,
    path: "/analisis",
    special: true
  },
  {
    label: "Antiplagio",
    icon: <FaShieldAlt />,
    path: "/antiplagio",
    special: true
  }
];


  return (
    <nav className="nav-container">
      <div className="nav-inner">

        {/* LOGO */}
        <Link to="/" className="nav-logo">
          <img
            src={logoDoc}
            alt="Logo Investigación"
            className="nav-logo-img"
          />
        </Link>

        {/* HAMBURGER */}
        <div className="nav-hamburger" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* MENU */}
        <ul className={`nav-links ${open ? "nav-active" : ""}`}>
          {items.map((item, index) => (
            <li
              key={index}
              className="nav-item"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link to={item.path} onClick={() => setOpen(false)}>
                <span
                  className={`nav-icon ${
                    item.special ? "nav-icon-green" : ""
                  } ${hovered === index ? "hidden" : ""}`}
                >
                  {item.icon}
                </span>

                <span
                  className={`nav-text ${
                    hovered === index ? "visible" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

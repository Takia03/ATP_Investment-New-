import React from "react";
import { Link } from "react-router-dom";
import Signin from "../../components/Signin";
import Signup from "../../components/Signup";
import Download from "../../components/download";
import logoImage from "../../assets/Image/logo.png"; 
import "./index.css";

export default function Header() {
    return (
        <header className="w-full border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="ATP Investment Logo" className="h-8 w-8" />
            <span className="font-bold">ATP INVESTMENT</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Link to="/invest" className="Invest">Invest</Link>
            <Link to="/promotions" className="Promotions">Promotions</Link>
            <Link to="/signin" className="Signin"><Signin /></Link>
            <Link to ="/Signup" className="Signup"> <Signup /></Link>
            <Link to="/download" className="Download"><Download /></Link>
            
          </nav>
        </div>
      </header>
      
    );
  }
  
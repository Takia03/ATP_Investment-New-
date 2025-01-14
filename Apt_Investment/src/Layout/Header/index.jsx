import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/Image/logo.png"; 
import "./index.css";
import { Button } from "@/components/ui/button";

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
            <Link to="/signin" className="Signin">
                <Button className="ghost-button" variant="ghost">Sign In</Button>
            </Link>
            <Link to="/signup" className="Signup">
               <Button className="signup-button" variant="ghost">Sign Up</Button>
            </Link>
            <Link to="/download" className="Download">
                  <Button className="download-button" variant="outline">Download App</Button>
            </Link>

          </nav>
        </div>
      </header>
      
    );
  }
  
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logo from "../../assets/Image/logo.png"

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('Current language:', i18n.language);
    console.log('Available languages:', i18n.languages);
    console.log('Loaded namespaces:', i18n.loadedNamespaces);
    console.log('Loaded languages:', i18n.loadedLanguages);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "bn" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt={t('companyName')} className="h-8 w-8" />
            <span className="font-bold">{t('companyName')}</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t('toggleMenu')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/invest">{t('invest')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/promotions">{t('promotions')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/signin">{t('signIn')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/signup">{t('signUp')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/download">{t('downloadApp')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={toggleLanguage}>
                {i18n.language === "en" ? "বাংলা" : "English"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <nav className="hidden md:flex items-center space-x-4 flex-nowrap overflow-x-auto">
            <Link to="/invest" className="text-black hover:text-[#456FE8]">
              {t('invest')}
            </Link>
            <Link to="/promotions" className="text-black hover:text-[#456FE8]">
              {t('promotions')}
            </Link>
            <Button variant="ghost" asChild className="ghost-button">
              <Link to="/signin">{t('signIn')}</Link>
            </Button>
            <Button variant="ghost" asChild className="signup-button">
              <Link to="/signup">{t('signUp')}</Link>
            </Button>
            <Button variant="outline" asChild className="download-button">
              <Link to="/download">{t('downloadApp')}</Link>
            </Button>
            <Button
              variant="outline"
              className="language-button"
              onClick={toggleLanguage}
            >
              {i18n.language === "en" ? "বাংলা" : "English"}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;


"use client";
import { createContext, useContext, useState } from "react";

const AuthModalContext = createContext();

export function AuthModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("login"); // "login" | "register"

  function openLogin() {
    setMode("login");
    setIsOpen(true);
  }

  function openRegister() {
    setMode("register");
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <AuthModalContext.Provider
      value={{ isOpen, mode, openLogin, openRegister, closeModal }}
    >
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  return useContext(AuthModalContext);
}

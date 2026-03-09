"use client";
import Header from "@/components/layout/header";

export default function HeaderClient() {
  // stubs seguros (luego los conectas a tu modal)
  const openLogin = () => {};
  const openRegister = () => {};

  return <Header openLogin={openLogin} openRegister={openRegister} />;
}

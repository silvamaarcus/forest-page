import { useState } from "react";
import Logo from "/assets/img/forest.svg";

import { Menu, CircleX } from "lucide-react";

const Header = () => {
  const [isActive, setIsActive] = useState("hidden");
  const [onBlur, setOnBlur] = useState("hidden");

  const handleClickBtn = () => {
    setIsActive(isActive === "hidden" ? "block" : "hidden");
    setOnBlur(onBlur === "hidden" ? "block" : "hidden");
  };

  return (
    <>
      <section className="container py-8">
        <div className="flex items-center justify-between">
          <div>
            <img src={Logo} alt="Forest" />
          </div>

          <div className="hidden text-xl text-white md:block">
            <ul className="flex items-center gap-8 *:cursor-pointer">
              <li className="transition-all hover:border-b-2 hover:border-white">
                <a href="#acomodacoes">Acomodações</a>
              </li>
              <li className="transition-all hover:border-b-2 hover:border-white">
                <a href="#eventos">Eventos</a>
              </li>
              <li className="transition-all hover:border-b-2 hover:border-white">
                <a href="#experiencias">Experiências</a>
              </li>
              <li className="transition-all hover:border-b-2 hover:border-white">
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>

          <div className="block md:hidden">
            <button
              className="inline-block rounded-full bg-verde-300 p-2 text-verde-900 hover:bg-opacity-90"
              onClick={handleClickBtn}
            >
              <span className="flex items-center gap-4 px-1">
                Menu <Menu />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Menu Mobile */}
      <div
        className={`${onBlur} fixed inset-0 z-40 bg-black/50 backdrop-blur-md`}
      />
      <section
        className={`${isActive} top-50 fixed left-0 z-50 block h-screen w-full px-8 text-2xl text-white`}
      >
        <button
          className="absolute -top-16 right-8 size-8 cursor-pointer"
          onClick={handleClickBtn}
        >
          <CircleX size={32} color="var(--verde-300)" />
        </button>

        <ul className="flex flex-col items-center *:w-full *:cursor-pointer *:pl-4">
          <li className="py-4 transition-all hover:bg-gray-300 hover:bg-opacity-10">
            <a href="#acomodacoes">Acomodações</a>
          </li>
          <li className="border-b border-t border-gray-300 border-opacity-30 py-4 transition-all hover:bg-gray-300 hover:bg-opacity-10">
            <a href="#eventos">Eventos</a>
          </li>
          <li className="py-4 transition-all hover:bg-gray-300 hover:bg-opacity-10">
            <a href="#experiencias">Experiências</a>
          </li>
          <li className="border-t border-gray-300 border-opacity-30 py-4 transition-all hover:bg-gray-300 hover:bg-opacity-10">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;

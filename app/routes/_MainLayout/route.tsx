import { Outlet } from "@remix-run/react";
import { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";
import CustomLink from "~/components/CustomLink";
import MobileNavMainMenu from "~/components/MobileNavMainMenu";

export default function MainLayout() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div
      className={`text-zinc-200 min-h-screen${
        isMenuOpened ? " overflow-hidden" : ""
      }`}
    >
      <MobileNavMainMenu isOpened={isMenuOpened} />
      <header
        id="header"
        className="p-[10px] sm:px-[25px] sm:py-[15px] md:px-[40px] md:py-[20px] fixed top-0 left-0 flex items-center w-full justify-between z-20 backdrop-blur-sm"
      >
        <div className="relative border-[2px] 2xl:border-[3px] border-zinc-200 rounded-[6px] pl-[20px] xl:pl-[30px] 2xl:pl-[35px] 3xl:pl-[50px] pr-[5px] xl:pr-[15px] 3xl:pr-[20px] py-[2px] xl-py-[6px] 2xl:py-[7px] inline-block">
          <div className="absolute top-0 left-0 h-full w-[15px] 2xl:w-[20px] 3xl:w-[30px] bg-blue-700 rounded-l-[4px]" />
          <p className="font-bold text-sm md:text-base xl:text- 2xl:text-2xl 3xl:text-3xl">WML SPOTTED</p>
        </div>
        <button
          onClick={() => {
            setIsMenuOpened(!isMenuOpened);
          }}
          className="flex lg:hidden flex-col gap-[5px] md:gap-[6px] bg-transparent border-none p-0 m-0 cursor-pointer"
        >
          <div
            className={`w-[30px] md:w-[35px] h-[4px] bg-blue-700 rounded-[6px] transition-transform duration-[0.5s] ${
              isMenuOpened
                ? "-rotate-45 translate-y-[9px] md:translate-y-[10px]"
                : ""
            }`}
          ></div>
          <div
            className={`w-[30px] md:w-[35px] h-[4px] bg-blue-700 rounded-[6px] transition-transform duration-[0.5s] ${
              isMenuOpened
                ? "translate-x-[calc(100%_+_11px)] sm:translate-x-[calc(100%_+_36px)] md:translate-x-[calc(100%_+_51px)] "
                : ""
            }`}
          ></div>
          <div
            className={`w-[30px] md:w-[35px] h-[4px] bg-blue-700 rounded-[6px] transition-transform duration-[0.5s] ${
              isMenuOpened
                ? "rotate-45 -translate-y-[9px] md:-translate-y-[10px]"
                : ""
            }`}
          ></div>
        </button>
        <div className="hidden lg:flex gap-[20px] 2xl:gap-[30px] 3xl:gap-[50px]">
          <CustomLink linkContent="Zaloguj" />
          <CustomLink linkContent="Zarejestruj" />
          {/* <CustomLink linkContent="Wejdź na forum" /> */}
          <CustomLink linkContent="Pomoc" />
        </div>
      </header>
      <Outlet />
      <footer className="px-[20px] sm:px-[40px] md:px-[60px] py-[40px] bg-zinc-800">
        <div className="pb-[20px]">
          <h3 className="font-medium md:text-xl xl:text-3xl 2xl:text-4xl">Kontakt i Pomoc</h3>
          <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl xl:mt-[10px] 2xl:mt-[15px] mb-[5px] md:mb-[10px] xl:mb-[20px]">
            Wybierz opcję kontaktu z Administracją, aby rozwiązać swój problem!
          </p>
          <div>
            <div className="mb-[10px] xl:mb-[20px]">
              <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl mb-[5px] md:mb-[10px] xl:mb-[15px]">
                Wyślij email:
              </p>
              <a className="text-xs md:text-sm xl:text-base 2xl:text-xl font-semibold py-[5px] 2xl:py-[8px] px-[10px] 2xl:px-[18px] md:py-[8px] md:px-[20px] rounded-[21px] bg-blue-500 cursor-pointer">
                some-email@user.com
              </a>
            </div>
            <div>
              <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl mb-[5px] md:mb-[10px] xl:mb-[15px]">
                Wypełnij formularz kontaktowy:
              </p>
              <a className="text-xs md:text-sm xl:text-base 2xl:text-xl font-semibold py-[5px] 2xl:py-[8px] px-[10px] 2xl:px-[18px] md:py-[8px]  md:px-[20px] rounded-[21px] bg-blue-500 cursor-pointer">
                Przejdź do formularza
              </a>
            </div>
          </div>
        </div>
        <div className="pb-[40px] xl:mt-[20px]">
          <h3 className="font-medium md:text-xl xl:text-3xl 2xl:text-4xl">Regulaminy i Umowy Forum</h3>
        </div>
        <p className="text-xs md:text-sm xl:text-lg 3xl:text-xl flex gap-[5px] justify-center items-center">
          <FaRegCopyright className="w-[10px] md:w-[20px] 3xl:w-[30px] 3xl:h-[20px]" /> Wszystkie prawa
          zastrzeżone - 2024
        </p>
      </footer>
    </div>
  );
}

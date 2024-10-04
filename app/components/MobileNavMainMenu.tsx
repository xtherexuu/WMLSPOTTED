import CustomLink from "./CustomLink";

export default function MobileNavMainMenu({ isOpened }: { isOpened: boolean }) {
  return (
    <div
      className={`fixed lg:hidden top-0 w-screen h-screen bg-zinc-900 z-10 text-white transition-[left] duration-[0.5s] ease-linear p-[10px]${
        isOpened ? " left-0" : " left-[100vw]"
      }`}
    >
      <div className="flex flex-col gap-[40px] items-center justify-center h-full">
        <CustomLink linkContent="Zaloguj" className="w-[80%] text-center" />
        <CustomLink linkContent="Zarejestruj" className="w-[80%] text-center" />
        {/* <CustomLink linkContent="Wejdź na forum!" className="w-[80%] text-center" /> */}
        <CustomLink linkContent="Pomoc" className="w-[80%] text-center" />
      </div>
    </div>
  );
}

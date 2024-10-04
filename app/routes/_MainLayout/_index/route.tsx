import { useEffect, useState } from "react";
import BounceScrollButton from "~/components/BounceScrollButton";
import NeonCard from "~/components/NeonCard";
import CustomLink from "~/components/CustomLink";
import { BackgroundLines } from "~/components/BackgroundLines";
import { WavyBackground } from "~/components/WavyBackground";
import { FaBook, FaUser } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import srcToUndeLine from "~/utils/llline.svg";
import srcToRegisterSvg from "~/utils/registerSvg.svg";
import srcToPeopleSvg from "~/utils/peopleSvg.svg";
import srcToFirstPostSvg from "~/utils/firstPost.svg";

export function links() {
  return [
    { rel: "preload", href: srcToRegisterSvg, as: "image" },
    { rel: "preload", href: srcToPeopleSvg, as: "image" },
    { rel: "preload", href: srcToUndeLine, as: "image" },
    { rel: "preload", href: srcToFirstPostSvg, as: "image" },
  ];
}

export default function Main() {
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const height = document.querySelector("#header")?.clientHeight || 0;
    console.log(height);
    setHeaderHeight(height);
  }, []);
  return (
    <main>
      <section className="relative px-[20px] sm:px-[40px] md:px-[60px]">
        <BackgroundLines>
          <div
            className={`flex flex-col gap-[10px] justify-center pt-[48px]`}
            style={{ minHeight: `calc(100vh - ${headerHeight}px` }}
          >
            <h1 className="font-bold text-xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-[3.5rem] text-center">
              <span className="text-red-500">Twoje</span> miejsce do dzielenia
              się <span className="text-blue-500">opiniami</span> i{" "}
              <span className="text-blue-500">historiami</span> z{" "}
              <span className="relative">
                Mławy!
                <img
                  src={srcToUndeLine}
                  className="absolute top-0 left-0 w-[calc(100%_+_50px)]"
                />
              </span>
            </h1>
            <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl pt-[10px] xl:pt-[20px] 2xl:pt-[30px] text-center text-zinc-300">
              Zobacz, co słychać w Twojej okolicy.
            </p>
          </div>
        </BackgroundLines>
        <BounceScrollButton />
      </section>
      <section className="bg-zinc-800 w-full min-h-[100vh] p-[48px_20px_10px] sm:p-[60px_40px_20px] md:p-[80px_60px_20px] 2xl:p-[100px_60px_20px] 3xl:p-[120px_60px_20px]">
        <h2 className="mt-[20px] font-semibold text-xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-[3.5rem] lg:text-4xl md:mb-[60px]">
          <span className="text-blue-500">Jak</span> to{" "}
          <span className="relative">
            działa?
            <img
              src={srcToUndeLine}
              className="absolute top-0 left-0 w-[calc(100%_+_50px)]"
            />
          </span>
        </h2>
        <div className="p-[10px] md:px-[40px] 2xl:px-[8%] pb-[40px] mt-[40px] xl:mt-[90px] 2xl:mt-[130px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[80px] 2xl:gap-[8%] md:gap-[100px] lg:gap-[80px] grid-flow-dense">
          <NeonCard
            title="Zarejestruj się!"
            text="Na naszej platformie umożliwiamy publikowanie anonimowych postów.
              Aby jednak dodawać posty, zarówno publiczne, jak i anonimowe, lub
              wyświetlać posty innych użytkowników, musisz założyć konto!"
            step={1}
            Icon={FaUser}
            imgSrc={srcToRegisterSvg}
            buttonName="Zarejestruj się!"
            className="bg-zinc-800 rounded-[21px] px-[10px] pt-[5px] pb-[10px]"
          />
          <NeonCard
            title="Wejdź na forum!"
            text="Gratulacje! Masz już konto na naszej platformie! Teraz czas na odkrywanie – zajrzyj na forum i sprawdź, co ciekawego piszą inni!"
            step={2}
            Icon={FaBook}
            imgSrc={srcToPeopleSvg}
            buttonName="Wejdź na forum!"
            className="bg-zinc-800 rounded-[21px] px-[10px] pt-[5px] pb-[10px]"
          />
          <NeonCard
            title="Napisz swój pierwszy post!"
            text="Widać, że wiesz już, co i jak! Może to właściwy moment, aby napisać swój pierwszy post? Możesz to zrobić zarówno anonimowo, jak i publicznie! Nie wahaj się i dołącz do rozmowy."
            step={3}
            Icon={IoChatbubbleEllipses}
            imgSrc={srcToFirstPostSvg}
            buttonName="Wejdź na forum!"
            className="bg-zinc-800 rounded-[21px] px-[10px] pt-[5px] pb-[10px]"
          />
        </div>
      </section>
      <section className="bg-zinc-900 w-full h-screen pt-[50px]">
        <div className="relative h-full overflow-hidden">
          <div className="h-full content-center relative z-[8] p-[20px] sm:px-[40px] lg:px-[60px] xl:px-[20%] grid grid-cols-1 grid-rows-[auto_auto] justify-center gap-[30px] md:gap-[40px] lg:gap-[50px]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] 2xl:text-[4rem] font-bold text-center col-span-2 [text-shadow:_0px_0px_10px_#3b82f6]">
              Dołącz do nas już teraz!
            </h2>
            <div className="grid grid-cols-2 gap-[30px] md:gap-[50px] lg:gap-[70px]">
              <CustomLink
                linkContent="Zaloguj"
                className="text-center bg-[#3f3f4650] border-blue-500 [box-shadow:_0_0_20px_1px_#3b82f6]"
              />
              <CustomLink
                linkContent="Zarejestruj"
                className="text-center bg-[#3f3f4650] border-blue-500 [box-shadow:_0_0_20px_1px_#3b82f6]"
              />
              {/* <CustomLink
              linkContent="Wjedź na forum!"
              className="bg-[#3f3f4650] border-blue-500 [box-shadow:_0_0_20px_1px_#3b82f6]"
            /> */}
            </div>
          </div>
          <WavyBackground blur={10} speed="slow" />
        </div>
      </section>
    </main>
  );
}

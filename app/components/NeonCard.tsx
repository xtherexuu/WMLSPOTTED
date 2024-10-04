import { motion } from "framer-motion";
import { cn } from "~/utils/linesBgUtils";
import { IconType } from "react-icons";
import Link from "./CustomLink";

export default function ({
  className,
  containerClassName,
  animate = true,
  Icon,
  step,
  title,
  text,
  imgSrc,
  buttonName,
  buttonLink,
}: {
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  Icon?: IconType;
  step: number;
  title: string;
  text: string;
  imgSrc?: string;
  buttonName?: string;
  buttonLink?: string;
}) {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[3px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />

      <div className={cn(`relative z-[3] h-full`, className)}>
        <div className="p-[10px] md:p-[20px] h-full grid grid-cols-1 grid-rows-[auto_1fr_auto]">
          <div className="flex items-center gap-[10px]">
            {Icon && (
              <Icon className="w-[10px] md:w-[20px] 2xl:w-[30px] 2xl:h-[20px] 3xl:h-[25px]" />
            )}
            <p className="text-xs md:text-sm 2xl:text-base 3xl:text-xl font-semibold">
              KROK {step}
            </p>
          </div>
          <div className="flex h-full items-center">
            {imgSrc && <img className="w-full pt-[20px]" src={imgSrc} />}
          </div>
          <div className="flex flex-col justify-end items-start pb-[10px] md:pb-[20px]">
            <h2 className="font-semibold md:text-xl 2xl:text-2xl 3xl:text-3xl pt-[10px] md:pt-[20px]">
              {title}
            </h2>
            <p className="text-xs md:text-base 2xl:text-lg 3xl:text-2xl text-zinc-300 mb-[10px] md:mb-[20px] xl:mt-[10px]">
              {text}
            </p>
            {buttonName && <Link linkContent={buttonName} />}
          </div>
        </div>
      </div>
    </div>
  );
}

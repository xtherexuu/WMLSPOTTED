import { motion } from "framer-motion";
import { cn } from "~/utils/linesBgUtils";
import { Link } from "@remix-run/react";

export default function CustomLink({
  linkContent,
  className,
  to,
}: {
  linkContent: string;
  className?: string;
  to?: string;
}) {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      to={to}
      whileHover={{
        backgroundColor: "rgb(59 130 246)",
        transition: { duration: 0.5 },
      }}
      whileTap={{
        backgroundColor: "rgb(59 130 246)",
      }}
      className={cn(
        "cursor-pointer text-xs md:text-sm xl:text-base 2xl:text-xl 3xl:text-2xl font-semibold px-[10px] md:px-[20px] 2xl:px-[30px] 3xl:px-[40px] py-[5px] md:py-[8px] 2xl:py-[10px] bg-red-zinc-900 rounded-[21px] border-[2px] 2xl:border-[4px] border-blue-500",
        className
      )}
    >
      {linkContent}
    </MotionLink>
  );
}

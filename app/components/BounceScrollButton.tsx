import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function BounceScrollButton() {
  const active = useAnimation();
  const activeConfiguration = {
    translateY: ["5px", "0px", "-5px", "5px"],
    transition: { repeat: Infinity, ease: "linear", duration: 1 },
  };
  useEffect(() => {
    active.start(activeConfiguration);
  }, [active]);

  return (
    <motion.button
      className="flex justify-center items-center w-[45px] lg:w-[60px] 2xl:w-[80px] h-[45px] lg:h-[60px] 2xl:h-[80px] rounded-[50%] absolute bottom-[20px] left-[50%] p-[10px]"
      variants={{
        init: {
          translateX: "-50%",
          translateY: "0px",
        },
      }}
      initial={"init"}
      animate={active}
      onHoverStart={() => active.stop()}
      onHoverEnd={() => active.start(activeConfiguration)}
      whileHover={{
        scale: "1.25",
      }}
      onClick={() => {
        scrollTo(
          0,
          document.documentElement.clientHeight -
            (document.querySelector("#header")?.clientHeight || 0)
        );
      }}
    >
      <IoIosArrowDown className="w-full h-full" />
    </motion.button>
  );
}

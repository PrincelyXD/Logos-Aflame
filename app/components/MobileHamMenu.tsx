"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

import CustomButton from "./CustomButton";
import { ChevronRight, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { NavRoutes } from "../assets/static";
import AccordionList from "./AccordionList";

const MobileHamMenu = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex lg:hidden ">
      <Hamburger
        color={isScrolled ? "#000" : "#cccccc"}
        direction="left"
        toggled={isOpen}
        toggle={setIsOpen}
        size={25}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="hamDropdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
            layout
            onClick={() => setIsOpen(false)}
            className="fixed top-0 left-0
       bg-[#0B1BA7]/5 backdrop-blur-[5px] pl-5 overflow-hidden border-white/10
        w-full h-full z-[999]"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "350px" }}
              exit={{ opacity: 0, width: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white absolute 
       rounded-l-xl
        right-0 h-full
         w-[300px] p-5
          shadow-custom"
            >
              <Hamburger
                rounded
                direction="right"
                toggled={isOpen}
                toggle={setIsOpen}
                size={25}
                color="#000"
              />

              <ul className=" my-5 flex flex-col   gap-y-3 ">
                {NavRoutes.map((route, index) => (
                  <motion.li
                  onClick={() => setIsOpen(false)}
                    initial={{ transform: "translateY(30px)", opacity: 0 }}
                    animate={{ transform: "translateY(0px)", opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: 0.1 + index / 10,
                    }}
                    key={index}
                    className=" flex"
                  >
                    <Link className=" mobile-nav_link " href={route.path}>
                      
                      <ChevronRight />
                      {route.title}
                    </Link>
                  </motion.li>
                ))}

                <AccordionList setIsOpen={setIsOpen} />
              </ul>
              <CustomButton
                className=" flex gap-x-2 w-fit  live-cta"
                beforeIcon={<HeartHandshake />}
                text="Giving"
                href="/giving"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHamMenu;

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { SetStateAction } from "react";
import { departments } from "../assets/static";

const AccordionList = ({setIsOpen}:{setIsOpen:React.Dispatch<SetStateAction<boolean>>}) => {
  const [accordionOpen, setAccordionOpen] = React.useState(false);
  return (
    <motion.li
   
      initial={{ transform: "translateY(30px)", opacity: 0 }}
      animate={{ transform: "translateY(0px)", opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.1 + 4 / 10,
      }}
      onClick={() => setAccordionOpen(!accordionOpen)}
      className={`  transition-all
      duration-300 items-center cursor-pointer
      w-full `}
    >
      <span className="mobile-nav_link">
        <ChevronRight
          className={`
          transition-transform duration-300
        ${accordionOpen ? "rotate-90 " : "rotate-0 "}`}
        />
        Departments
      </span>

      <div
        className={`  w-full overflow-hidden transition-all duration-300 
    ${accordionOpen ? "h-[230px]" : "h-0"}`}
      >
        <ul className="flex flex-col px-3">
          {departments.map((department, index) => (
            <motion.li
            onClick={()=> setIsOpen(false)}
              initial={{
                transform: "translateY(30px)",
                opacity: 0,
              }}
              animate={{ transform: "translateY(0px)", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.1 + (index + 5) / 10,
              }}
              key={index}
              className="flex"
            >
              <Link className="mobile-nav_link ml-3  " href={department.path}>
                <span className="mx-3">•</span>
                {department.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
};

export default AccordionList;

"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import ContactForm from "./components/ContactForm";

const Page = () => {
  return (
    <section className="h-fit w-full bg-faint-white py-[30px] text-black">
      <motion.div
        initial={{ opacity: 0, transform: "translateY(40px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto flex h-fit w-[90%] flex-col justify-center gap-x-5 gap-y-5 pt-[80px] md:w-[88%] md:flex-row-reverse lg:w-[80%]"
      >
        <div className="h-[850px] rounded-[30px] bg-white px-5 pt-10 sm:px-10 md:w-1/2">
          <span className="my-5 font-manrope text-[16px] font-medium tracking-[1px] text-company-red xs:mb-[15px]">
            Get in Touch
          </span>
          <h2 className="mb-5 w-full text-[40px] font-medium leading-[1.3] md:w-[350px]">
            Let’s Chat, Reach Out to Us
          </h2>

          <p className="pr-10 font-manrope text-[16px] font-light">
            Have questions or feedback? We’re here to help. Send us a message,
            and we’d respond within 24 hours
          </p>
          <span className="mt-10 block h-[1px] w-full bg-[#00000026]" />

          <ContactForm />
        </div>

        <section className="flex h-[600px] flex-col gap-y-5 overflow-hidden rounded-[30px] sm:h-[850px] md:w-1/2">
          <div
            className="h-[65%] w-full rounded-b-[30px]
           bg-[url(/lam-building.png)] bg-cover bg-center"
          ></div>

          <div className="align-center flex h-[35%] w-full flex-col gap-y-3 rounded-[30px] bg-white p-2 sm:p-5">
            <span className="relative flex h-1/2 w-full items-center rounded-[20px] bg-[#f7f7f7] pl-[40px] sm:pl-[80px]">
              <span className="absolute left-2 rounded-full bg-[#FFE5E5] p-2 sm:left-5 sm:p-4">
                <Mail style={{ color: "#FF4D4D", fontSize: "25px" }} />
              </span>

              <span className="ml-5 font-rubik font-medium">
                {" "}
                Email <br />{" "}
                <span className="font-poppins text-[14px] font-normal">
                  {" "}
                  <a className="italic" href="mailto:reapfold@gmail.com">
                    office@logosaflameministries.org
                  </a>
                </span>{" "}
              </span>
            </span>
            <span className="relative flex h-1/2 w-full flex-col justify-center rounded-[20px] bg-[#f7f7f7] pl-[40px] sm:pl-[80px]">
              <span className="absolute left-2 rounded-full bg-[#FFE5E5] p-2 sm:left-5 sm:p-4">
                <Phone style={{ color: "#FF4D4D", fontSize: "25px" }} />
              </span>
              <span className="ml-5 font-rubik font-medium">
                {" "}
                Phone <br />{" "}
                <span className="font-poppins text-[14px] font-normal">
                  (+234) 8117002787
                </span>{" "}
              </span>
            </span>
          </div>
        </section>
      </motion.div>
    </section>
  );
};

export default Page;

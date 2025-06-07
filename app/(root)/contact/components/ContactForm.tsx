// import { ValidationError, useForm } from "@formspree/react";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ContactForm = () => {
//   const [state, handleSubmit, reset] = useForm("");
  const [closeModal, setCloseModal] = useState(true);

  const formRef = useRef<HTMLFormElement>(null);

//   const handleModalCLose = () => {
//     setCloseModal(false);
//     formRef.current!.reset();
//     return reset;
//   };

  return (
    <div className="mt-10 h-fit w-full">
      {/* {state.succeeded && closeModal && (
        <motion.div
          onClick={handleModalCLose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" left-0 top-[0px] fixed z-30 flex h-screen w-full items-center justify-center rounded-[30px] bg-[#000000cc] px-5"
        >
          <motion.div
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex h-[300px] w-full max-w-[500px] flex-col justify-center rounded-[30px] bg-white p-7 text-center font-nunito"
          >
            <h1 className="mb-5 font-poppins text-[20px] font-semibold leading-[1] sm:text-[30px]">
              Thank you! 🎉
            </h1>
            <p className="text-[13px] sm:text-[16px]">
              We've received your message and our support team will get back to
              you as soon as possible. We appreciate your patience and look
              forward to assisting you!
            </p>

            <Link
              onClick={handleModalCLose}
              className="mt-3 w-fit self-center rounded-[10px] bg-company-red px-[30px] py-[10px] font-bold text-white"
              to="/support"
            >
              Continue
            </Link>
          </motion.div>
        </motion.div>
      )} */}

      <form ref={formRef} className="flex flex-col gap-y-12" >
        <div className="flex gap-x-5">
          <span className="relative flex h-[50px] w-1/2 font-poppins">
            <label
              htmlFor="firstName"
              className="absolute top-[-10px] text-[14px]"
            >
              First Name
            </label>
            <input
              placeholder="First Name"
              className="mt-5 w-full rounded-br-[10px] rounded-tl-[10px] bg-[#f7f7f7] p-5 py-6 text-[14px] outline-none placeholder:font-light placeholder:italic placeholder:text-slate-500"
              id="firstName"
              type="text"
              name="firstName"
              required
            />
          </span>
          <span className="relative flex h-[50px] w-1/2 font-poppins">
            <label
              htmlFor="lastName"
              className="absolute top-[-10px] text-[14px]"
            >
              Last Name
            </label>
            <input
              placeholder="Last Name"
              className="mt-5 w-full rounded-br-[10px] rounded-tl-[10px] bg-[#f7f7f7] p-5 py-6 text-[14px] outline-none placeholder:font-light placeholder:italic placeholder:text-slate-500"
              id="lastName"
              type="text"
              name="lastName"
              required
            />
           
          </span>
        </div>

        <div>
          <span className="relative flex h-[50px] w-full font-poppins">
            <label htmlFor="email" className="absolute top-[-10px] text-[14px]">
              Email Address
            </label>
            <input
              placeholder="Email address"
              className="mt-5 w-full rounded-br-[10px] rounded-tl-[10px] bg-[#f7f7f7] p-5 py-6 text-[14px] outline-none placeholder:font-light placeholder:italic placeholder:text-slate-500"
              id="email"
              type="email"
              name="email"
              required
            />
          </span>
        </div>

        <div>
          <span className="relative flex h-[50px] w-full font-poppins">
            <label
              htmlFor="message"
              className="absolute top-[-10px] text-[14px]"
            >
              Message
            </label>
            <textarea
              placeholder="Leave us a message"
              className="mt-5 block h-[150px] w-full resize-none rounded-br-[10px] rounded-tl-[10px] bg-[#f7f7f7] p-5 py-6 text-[14px] outline-none placeholder:font-light placeholder:italic placeholder:text-slate-500"
              id="message"
              name="message"
              required
            />
          </span>
        </div>

        <div className="relative bottom-[-90px] sm:bottom-[-130px]">
          <button
            type="submit"
            className="live-cta"
            // className={`rounded-[10px] ${state.submitting && "pointer-events-none cursor-not-allowed"} border-[1px] border-[#FF0000] px-[30px] py-[8px] font-nunito font-bold uppercase transition-colors duration-300 hover:bg-company-red hover:text-white sm:py-[15px]`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

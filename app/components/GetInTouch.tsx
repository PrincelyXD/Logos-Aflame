const GetInTouch = () => {
  return (
    <section className="relative
    text-gray-800 
    flex h-fit w-full justify-center bg-white py-[100px] pb-[200px]">
      <div
      
        className="flex w-full flex-col items-center text-center md:w-[88%]"
      >
        <h3 className="mb-5 w-full px-5 font-poppins text-[36px] font-extrabold leading-[1.2] text-deep-blu xs:px-10 md:text-[50px] font-nunito lg:w-[700px] lg:px-0">
          Ready to Connect With a Community of Faith?
        </h3>

        
        <p className=" my-5 px-10 text-base md:text-[17px]">
          We’re here to pray with you, support you, and walk with you in faith.
          <br />
          <i className="font-medium flex-col md:flex-row flex-center gap-x-5 pt-2">
         
           
           080 7741 4660
          </i>
        </p>

        <a
          className="live-cta"
          href="/contact"
        >
          Get in Touch
        </a>
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full  overflow-hidden leading-[0]">
        <svg
          className="relative block h-[68px] w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#101828"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default GetInTouch;

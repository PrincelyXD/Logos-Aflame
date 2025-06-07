import { LeadershipTeam } from "@/app/assets/static";


export const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our Leadership
            <span className="block text-gradient bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of pastors and ministers who work tirelessly
            to serve our community and spread God’s love.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  lg:gap-x-[200px]">
          {LeadershipTeam.map((pastor, index) => (
            <div
              key={index}
              className={` rounded-xl 
                h-[500px] relative
                shadow-md overflow-hidden  `}
            >
              <div
                className={` h-[55%] relative
                 ${pastor.image} bg-cover bg-center
               `}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>

              <div className="p-6 ">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {pastor.name}
                </h3>
                <p className="text-red-600 my-2 font-semibold 
                ">{pastor.role}</p>

                <p className="text-sm">
                    {pastor.bio}
                </p>

              </div>
               <span className="
               bg-gradient-to-r from-rose-300 
               absolute bottom-0 h-1.5 w-full bg-black"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Music, Camera, Users } from "lucide-react";

export const DepartmentSection = () => {
  const departments = [
    {
      icon: <Music className="h-8 w-8 text-red-600" />,
      name: "Garments of Praise ",
      description:
        "Our passionate choir team leads the congregation in worship through powerful musical performances and spiritual songs.",
      image: " /choir.png",
    },
    {
      icon: <Camera className="h-8 w-8 text-red-600" />,
      name: "Media Team",
      description:
        "Our skilled media team ensures that our message reaches beyond our walls through high-quality broadcasts and engaging content.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      name: "Ushering Department",
      description:
        "Our dedicated ushers create a welcoming environment and ensure smooth operation of our services.",
      image:
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section id="departments" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our Ministry
            <span className="block text-gradient bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Departments
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each department plays a vital role in creating an impactful worship
            experience and serving our community.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl overflow-hidden shadow-modern transition-all duration-1000 transform `}
            >
              <div className="relative h-48">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-100 rounded-lg mr-4">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {dept.name}
                  </h3>
                </div>
                <p className="text-gray-600">{dept.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Project1, Project2, } from '../../Assets';

function HomeProjects() {
  return (
    <div className="bg-white px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e8e] mb-14 text-center">
        Our Projects
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {/* Project Card */}
        {[{
          img: Project1,
          title: "Skyline Residency",
          location: "Noida Sector 76, Uttar Pradesh"
        }, {
          img: Project2,
          title: "Green Valley Towers",
          location: "Gurugram Sector 45, Haryana"
        }].map((project, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="overflow-hidden aspect-video">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#1d3e8e] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-base">{project.location}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProjects;

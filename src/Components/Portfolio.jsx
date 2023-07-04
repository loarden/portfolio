import ProjectDetails from "./ProjectDetails";
import SectionHeader from "./SectionHeader";
import { projects } from "../Assets/datas";
import Button from "./Button";

function Portfolio() {
  return (
    <section
      id="Portfolio"
      className="w-full min-h-fit bg-primary text-text px-6 py-28 border-b-[1px] border-black"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="px-4">
          <SectionHeader text="Some of my works:" />
          <p className="text-center font-thin text-xl md:text-2xl mb-16">Here are a few past projects I've worked on.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
          {projects?.map((project, index) => {
            return (
              <ProjectDetails
                key={index}
                title={project.title}
                img={project.img}
                code={project.code}
                url={project.url}
                desc={project.desc}
                stacks={project.stacks}
              />
            );
          })}
        </div>
        <div className="mt-16 flex justify-center">
          <Button 
            text='See more on GitHub'
            url='https://github.com/loarden'
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

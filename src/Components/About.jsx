import SectionHeader from "./SectionHeader";
import { iconComponents } from "../Assets/datas";
import InViewAnimation from "./InViewAnimation";

function About() {
  return (
    <section
      id="About"
      className="w-full h-fit bg-primary border-b-[1px] border-black px-6 py-28"
    >
      <article className="gap-10 flex flex-col items-center max-w-7xl w-full mx-auto">
        <div className="grow w-full max-w-sm sm:max-w-md md:max-w-xl text-center font-thin">
          <SectionHeader text="About me" />
          <InViewAnimation>
            <p className="text-2xl sm:text-3xl md:text-4xl mb-2">
              Hi, my name is Biacsi Ors.
            </p>
            <p className="text-xl md:text-2xl">
              I am a <span className="font-bold">Frontend Developer</span>
            </p>
            <p className="mt-2 text-xl md:text-2xl">
              I love to create visually appealing and user-friendly web
              applications. Currently my main framework is{" "}
              <span className="font-semibold">React</span> but I'm always open
              to learn new technologies and increase my skills. Let's create
              exceptional experiences together!
            </p>
          </InViewAnimation>
        </div>
        <div className="grow w-full pt-16 text-center">
          <SectionHeader text="Skills" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 text-6xl text-secondary items-center justify-items-center gap-5 transition-all">
            {iconComponents.map((comp, index) => {
              return (
                <InViewAnimation key={index}>
                  <div className={`${comp.iconColor} transition-all`}>
                    {comp.comp}
                  </div>
                </InViewAnimation>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;

import SectionHeader from "./SectionHeader";
import { iconComponents } from "../Assets/datas";
import InViewAnimation from "./InViewAnimation";

function About() {
  return (
    <section id="About" className="w-full h-fit bg-primary">
      <article className="py-14 gap-10 flex flex-col items-center max-w-7xl w-full mx-auto">
        <div className="grow w-full max-w-sm sm:max-w-md md:max-w-xl px-4 text-center font-thin">
          <SectionHeader text="About me" />
          <InViewAnimation>
            <p className="text-2xl sm:text-3xl md:text-4xl mb-2">
              Hi, my name is Biacsi Ors.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl">
              I am a <span className="font-bold">Frontend Developer</span>
            </p>
            <p className="mt-2 text-lg sm:text-xl md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              perferendis tenetur illum. Repellendus laboriosam adipisci
              recusandae nemo assumenda ab dicta tempore ipsam! Illo, impedit.
              Corporis quasi provident beatae consequuntur cumque.
            </p>
          </InViewAnimation>
        </div>
        <div className="grow w-full px-4 text-center">
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

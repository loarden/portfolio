import ProjectDetails from "./ProjectDetails"
import SectionHeader from "./SectionHeader"
import { projects } from "../Assets/datas"
import InViewAnimation from "./InViewAnimation"

function Portfolio() {
  return (
    <section id="Portfolio" className="w-full min-h-screen bg-primary text-text">
      <div className="max-w-7xl w-full mx-auto">
        <div className="px-4">
          <SectionHeader
            text='My Projects'
          />
        </div>
        <InViewAnimation >
          <div className="flex sm:px-4 flex-col sm:flex-row-reverse gap-5">
            <ProjectDetails
              title={projects.delivery.title}
              img={projects.delivery.img}
              desc={projects.delivery.desc}
              url={projects.delivery.url}
              code={projects.delivery.url}
            />
          </div>
        </InViewAnimation>
      </div>
    </section>
  )
}

export default Portfolio
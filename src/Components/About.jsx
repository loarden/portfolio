import NextPage from "./NextPage"

function About() {
  return (
    <section id="About" className="w-full h-screen bg-black">
      <article className="pt-12 flex flex-col items-center">
        <h2 className=" text-2xl pb-5 border-b-[2px]">About me</h2>
        <p className="mt-5 px-4 max-w-3xl text-md break-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam illo nobis quaerat ex accusantium laudantium. Nostrum, voluptate excepturi illo obcaecati maiores, impedit a nam, vel dolorem eveniet nulla cupiditate!</p>
        <h2 className="text-2xl mt-5 pb-5 border-b-[2px]">Tech Stack</h2>
      </article>
      <NextPage 
        page='Portfolio'
      />
    </section>
  )
}

export default About
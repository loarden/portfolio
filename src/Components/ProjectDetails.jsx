import { FaEye, FaGithub } from 'react-icons/fa6'

function ProjectDetails({ img, title, url, code, desc }) {
  return (
    <>
      <div className="grow w-full object-fill">
        <img className='object-contain' src={img} alt={title} />
      </div>
      <div className="grow w- flex flex-col justify-around items-center">
        <h3 className='text-2xl'>{title}</h3>
        <p className='text-lg'>{desc}</p>
        <div className='flex w-full justify-around text-3xl'>
          <button><a href={url}><FaEye /></a></button>
          <button><a href={code}><FaGithub /></a></button>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails
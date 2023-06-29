import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub, FaSass } from 'react-icons/fa6'
import { SiTailwindcss, SiFirebase, SiMui } from 'react-icons/si'
import delishDelivery from '../img/delish-delivery.png'

export const iconComponents = [
  {
    comp: <FaHtml5 />
  },
  {
    comp: <FaCss3 />
  },
  {
    comp: <FaJs />
  },
  {
    comp: <FaReact />
  },
  {
    comp: <FaNodeJs />
  },
  {
    comp: <FaGitAlt />
  },
  {
    comp: <FaGithub />
  },
  {
    comp: <SiTailwindcss />
  },
  {
    comp: <SiFirebase />
  },
  {
    comp: <SiMui />
  },
  {
    comp: <FaBootstrap />
  },
  {
    comp: <FaSass />
  },
]

export const projects = {
  delivery: {
    title: 'DelishDelivery',
    img: delishDelivery,
    url: 'https://delishdelivery-e1cc9.web.app/',
    code: 'https://github.com/loarden/DelishDelivery',
    desc: 'Food delivery application with React, Firebase and Context API',
    stack: [
      {
        title: 'React'
      },
      {
        title: 'Firebase'
      },
      {
        title: 'Tailwind'
      },
      {
        title: 'Context API'
      }
    ]
  }
}

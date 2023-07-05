import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub, FaSass, FaLinkedin } from 'react-icons/fa6'
import { SiGmail } from "react-icons/si"
import { SiTailwindcss, SiFirebase, SiMui } from 'react-icons/si'
import delishDelivery from '../img/delish-delivery.png'
import todoApp from '../img/todoapp.png'
import weatherApp from '../img/weather-app.png'

export const iconComponents = [
  {
    comp: <FaHtml5 />,
    iconColor: 'hover:text-[#e34c26]'
  },
  {
    comp: <FaCss3 />,
    iconColor: 'hover:text-[#264de4]'
  },
  {
    comp: <FaJs />,
    iconColor: 'hover:text-[#f0db4f]'
  },
  {
    comp: <FaReact />,
    iconColor: 'hover:text-[#61dafb]'
  },
  {
    comp: <FaNodeJs />,
    iconColor: 'hover:text-[#3c873a]'
  },
  {
    comp: <FaGitAlt />,
    iconColor: 'hover:text-[#f34f29]'
  },
  {
    comp: <FaGithub />,
    iconColor: 'hover:text-[#ffffff]'
  },
  {
    comp: <SiTailwindcss />,
    iconColor: 'hover:text-[#3490dc]'
  },
  {
    comp: <SiFirebase />,
    iconColor: 'hover:text-[#ffcc2f]'
  },
  {
    comp: <SiMui />,
    iconColor: 'hover:text-[#0080ff]'
  },
  {
    comp: <FaBootstrap />,
    iconColor: 'hover:text-[#7952b3]'
  },
  {
    comp: <FaSass />,
    iconColor: 'hover:text-[#cc6699]'
  },
]

export const projects = [
  {
    title: 'DelishDelivery',
    img: delishDelivery,
    url: 'https://delishdelivery-e1cc9.web.app/',
    code: 'https://github.com/loarden/DelishDelivery',
    desc: 'Food delivery application with React, Firebase and Context API',
    stacks: [
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
  },
  {
    title: 'Todo Application',
    img: todoApp,
    url: 'https://loarden.github.io/my-todo-app/',
    code: 'https://github.com/loarden/my-todo-app',
    desc: 'Responsive to-do application with localstorage',
    stacks: [
      {
        title: 'React'
      },
      {
        title: 'Vite'
      },
      {
        title: 'Material Tailwind'
      },
    ]
  },
  {
    title: 'Weather Application',
    img: weatherApp,
    url: 'https://loarden.github.io/weather-app/',
    code: 'https://github.com/loarden/weather-app',
    desc: 'Weather Application with 12 hours weather forecast',
    stacks: [
      {
        title: 'React'
      },
      {
        title: 'OpenWeather API'
      },
      {
        title: 'Tailwind'
      },
    ]
  }
]

export const navItems = [
  {
    title: 'Home'
  },
  {
    title: 'About'
  },
  {
    title: 'Portfolio'
  },
  {
    title: 'Contact'
  },
]

export const sidebarIcons = [
  {
    icon: <FaGithub />,
    bgColor: '#ffffff',
    textColor: '#000000',
    url: 'https://github.com/loarden'
  },
  {
    icon: <FaLinkedin />,
    bgColor: '#ffffff',
    textColor: '#0e76a8',
    url: 'https://www.linkedin.com/in/%C3%B6rs-biacsi-345b3b239/'
  },
  {
    icon: <SiGmail />,
    bgColor: '#ffffff',
    textColor: '#BB001B',
    url: 'mailto:biacsi.ors@gmail.com'
  }
]

export const formStyle = {
  inputStyle:
    "bg-primary border-text text-text text-lg md:text-xl resize-none w-full",
  buttonStyle:
    "px-8 py-4 rounded-3xl sm:text-lg md:text-xl border-[2px] border-text",
  divStyle: "w-full",
};

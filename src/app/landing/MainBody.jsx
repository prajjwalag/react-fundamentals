import React from 'react'
import rightArrow from '../../assets/rightArrow.svg'
import Projects from '../../components/Projects'
import './MainBody.css'
import YellowBorder from '../../components/YellowBorder'
import SkillsCard from '../../components/SkillsCard'

const MainBody = () => {

  const projectList = [
    {
      id: 1,
      title: "Uber Clone Application",
      description: "In this Uber Clone Project, I create a backend of a Ride Sharing Application.",
      logoImg: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
      projectUrl: "https://github.com/prajjwalag/Uber"
    },
    {
      id: 2,
      title:"AirBNB Hotel Booking Clone",
      description: "Developed Using Spring Boot and Hibernate, I created a backend of Hotel Booking App",
      logoImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1920px-Airbnb_Logo_B%C3%A9lo.svg.png",
      projectUrl: "https://github.com/prajjwalag/Uber"
    }, 
    {
      id: 3,
      title: "LinkedIn Microservices Project",
      description: "Developed a Linkedin Backend Application, Used Microservices and developed using spring boot.", 
      logoImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1920px-LinkedIn_2021.svg.png", 
      projectUrl: "https://github.com/prajjwalag/Uber"
    }
  ]

  const skillsList = [
    {
      id: 1,
      name: 'React',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png',
    },
    {
      id: 2,
      name: 'Tailwind',
      icon: 'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg',
    },
    {
      id: 3,
      name: 'ShadCN',
      icon: 'https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png',
    },
    {
      id: 4,
      name: 'SpringBoot',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/800px-Spring_Boot.svg.png',
    },
    {
      id: 5,
      name: 'Kubernetes',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/800px-Kubernetes_logo_without_workmark.svg.png',
    },
    {
      id: 6,
      name: 'Docker',
      icon: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000',
    },
    {
      id: 7,
      name: 'PostgreSQL',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/500px-Postgresql_elephant.svg.png',
    },
    {
      id: 8,
      name: 'MySQL',
      icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1280px-MySQL_logo.svg.png',
    },
    {
      id: 9,
      name: 'Kafka',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Apache_Kafka_logo.svg/800px-Apache_Kafka_logo.svg.png',
    }
    
  ]

  return (
    <main>
      <h3 className="name-heading">My name is Prajjwal</h3>
      <ol>
        <li>I like vite, Webpack not so much.</li>
        <li>Let's make the web interactive and awesome.</li>
        <li>Building cool user interfaceswith React.</li>
      </ol>
      <a href="#" className="hire-me-button">
        <span>Hire Me</span>
        <img src={rightArrow} alt="Right Arrow" />
      </a>

      <section className='project-section'>
        <YellowBorder>
          <h2>These are my Projects</h2>
        </YellowBorder>
        <p>I build high-quality Projects of all shapes and sizes.</p>

        <div className="project-container">
          {projectList.map(project => <Projects  {...project} key={project.id}/>)}
        </div>
        
      </section>

      <section className='skills-section'>
        <YellowBorder>
          <h2>Technologies that I know</h2>
        </YellowBorder>
        <p>I have listed some of my top skills, I know more of course.</p>
        <div className="skills-container">
          {skillsList.map(skill => <SkillsCard {...skill} key={skill.id}/>)}
        </div>
      </section>
      
    </main>
  )
}

export default MainBody

import React from 'react'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { MdNoFood, MdMoreHoriz } from 'react-icons/md'
import './css/projects.scss'

function Projects() {
  return (
    <section id="projects" className="max_width">
      <h3>Projects</h3>
      <article>
        {projects.map((project, i) => (
          <Card key={i} project={project} />
        ))}
      </article>
    </section>
  )
}

export const Card = ({ project }) => {
  const { Icon, url, header, description, codeURL } = project
  return (
    <div>
      <Icon size={30} />
      <a href={url} target="blank">
        {header}
      </a>
      <p>{description}</p>
      <a className="view-code" href={codeURL} target="blank">
        view code
      </a>
    </div>
  )
}

export const projects = [
  {
    Icon: BsFillBookmarkCheckFill,
    header: 'Travel app',
    codeURL: 'https://github.com/cyro-hub/Uber-react-firebase',
    url: 'https://travel-goo.netlify.app/',
    description:
      'We handle booking of travel trip and allow drivers to know your pickup position for any passenger registered to our app',
  },
  {
    Icon: MdNoFood,
    header: 'Food app',
    codeURL: 'https://github.com/cyro-hub/provider-react-php',
    url: 'https://provider-resto-cyril.netlify.app/admin',
    description: 'We handle booking for food delivery in our app',
  },
  {
    Icon: MdMoreHoriz,
    header: 'Still in development',
    codeURL: 'https://github.com/cyro-hub',
    url: 'https://github.com/cyro-hub',
    description:
      'This is link contains all the applications and websites on my github page both hosted, unhosted and still in development ',
  },
]

export default Projects

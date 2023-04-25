import React,{useState} from 'react'
import { Footer, Nav } from '../Home/Home'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import background from '../../assets/Background/background.png'
import './projects.scss'
import '@splidejs/react-splide/css';
import Pagination from '@mui/material/Pagination';
import { styled} from '@mui/material/styles';
import ProjectData from '../Data/Projects'

function Projects() {
const [projectNumber,setProjectNumber]=useState(1)
  return (
    <div className="project-container">
        <Nav active='projects'/>
        <div className="projects">
            <Project {...ProjectData[projectNumber-1]}/>
        </div>
        <CustomizedPagination count={ProjectData?.length} 
                              onChange={(e,v)=>setProjectNumber(v)} 
                              page={projectNumber} 
                              color="primary" 
                              sx={{marginInline:'auto'}} />
        <Footer/>
    </div>
  )
}

export default Projects


const Project=({title,description,view,code,images})=>{
    return<>
    <div className="project">
                <div className="details">
                    <h3>{title}</h3>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                    <div className="actions">
                        <a href={view} className='action-hire' target='_blank'>View Live</a>
                        <a href={code} className='action-talk' target='_blank'>Code</a>
                    </div>
                </div>
                <div className="project-images">
                    <Splide options={{
                            rewind: true,
                            perPage: 1,
                            gap: '1rem',
                            arrows: false,
                            drag: 'free',
                            cancelable: false
                            }}>
                                {
                                    images?.map((url,i)=><SplideSlide key={i}><Image url={url}/></SplideSlide>)
                                }
                    </Splide>
                </div>
            </div>
    </>
}

const Image=({url})=>{
    return (<>
        <img src={url} alt="background" />
        <div className="image-cover">
        </div>
    </>)
}

export const CustomizedPagination = styled(Pagination)`
margin:1em auto;
  button{
    color:#ffffffbf;
    border-color:#ffffffbf;
  }

  button:hover {
    color: #ffffff80;
  }
`;
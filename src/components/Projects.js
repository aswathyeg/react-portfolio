import React from 'react'
import TourHome from './TourHome';
import Destinations from './Destinations';
import Activities from './Activities';
import TourFooter from './TourFooter';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";


const Projects = () => {
  return (
    <div>
     
        <TourHome />
    <Destinations />
    <Activities />
    <TourFooter/>
    </div>
  )
}

export default Projects
import React from 'react'
import TourHome from './TourHome';
import Destinations from './Destinations';
import Activities from './Activities';
import Footer from './Footer';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";


const Projects = () => {
  return (
    <div>
     
        <TourHome />
    <Destinations />
    <Activities />
    {/* <Footer/> */}
    </div>
  )
}

export default Projects
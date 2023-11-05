import React from 'react'
import ProjectItem from './ProjectItem'
import cafetalinoImg from '../assets/cafetalino.png'
import nftImg from '../assets/nft.jpg'
import portafolio_1Img from '../assets/portafolio_1.png'
import portafolio_2Img from '../assets/portafolio_2.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Proyectos</h1>
      <p className='text-center py-8'>
        En esta seccion estan mostrados algunos de los trabajos que he realizado.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={cafetalinoImg} title='Cafe Cafetalino' />
        <ProjectItem img={nftImg} title='Creador de NFT' />
        <ProjectItem img={portafolio_1Img} title='Portafolio 1' />
        <ProjectItem img={portafolio_2Img} title='Portafolio 2' />
      </div>
    </div>
  )
}

export default Projects

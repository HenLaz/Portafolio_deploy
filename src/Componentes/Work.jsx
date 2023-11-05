import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2020,
        title: 'NFT Creator',
        duration: '3 Años',
        details: 'Como creador de NFT, mi trabajo se centra en la producción de contenido digital único que luego tokenizo en blockchain. Esto implica la creación, el mintado y el listado en mercados NFT. Además, dedico tiempo a promocionar mis creaciones, interactuar con mi comunidad y gestionar mis derechos de autor. Estoy constantemente adaptándome a los cambios en la industria de los NFT y buscando maneras de mantenerme relevante. Mi éxito depende de la demanda de mis creaciones, mi capacidad para promocionarlas y la construcción de una comunidad en torno a mi trabajo.'

    },
    {
        year: 2021,
        title: 'Administrador de Redes',
        duration: '1 Año',
        details: 'En el año 2021, con la expansión de Internet en zonas lejanas y la creciente importancia de la conectividad, me convertí en un administrador de redes, desempeñando un papel clave en la industria. Mi labor consiste en configurar, mantener y asegurar redes de computadoras en empresas y organizaciones.'
    },
    {
        year: 2019,
        title: 'Desarrollador de Aplicaciones Móviles ',
        duration: '2 Años',
        details: 'En los últimos años, he sido testigo del auge de los dispositivos móviles, lo que ha generado una creciente demanda en mi campo como desarrollador de aplicaciones móviles. Mi enfoque se centra en crear aplicaciones para plataformas como iOS y Android, lo que implica proporcionar una amplia gama de servicios y entretenimiento a través de dispositivos móviles.'
    },
    
];
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[001b5e]'>Trabajos</h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details} 
                    />
            ))}
        </div>
    )
}

export default Work

import React from 'react'

function Contact() {
  return (
    <section id="contact" className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40"> 
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white"> 
                Contáctame
            </h1>
            <br />
            <br />
            <p className='sm:text-3xl text-2xl text-white'>Teléfono: +52 461 337 0369</p>
            <br />
            <p className='sm:text-3xl text-2xl text-white'>Correo: pablo.torres021216@gmail.com</p>
            <br />
            <a href='https://github.com/PabloTorAc' className='sm:text-3xl text-2xl text-white underline'>GitHub</a>
            <br />
            <br />
            <a href='https://www.linkedin.com/in/pablo-fernando-torres-acosta-072a22251/' className='sm:text-3xl text-2xl text-white underline'>Linkedin</a>
        </div> 
    </section>
  )
}

export default Contact

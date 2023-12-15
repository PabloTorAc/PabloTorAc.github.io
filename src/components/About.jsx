import React from "react";

export default function About() {

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Pablo
            <br className="hidden lg:inline-block" />Soy estudiante de la carrera de Ing en software y sistemas Computacionales.
          </h1>
          <p className="mb-8 leading-relaxed">
          Con habilidades en lenguajes de programación 
          como lo son Java, JavaScript, C++. Me especializo en la construcción de páginas web,
          con herramientas como los son React y tailwindcss para el front end y Spring boot 
          para el back end
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Perfil.jpg"
          />
        </div>
      </div>
    </section>
  );
}
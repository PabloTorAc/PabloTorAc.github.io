import React from "react";

export default function About() {

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Pablo
            <br className="lg:inline-block" />Soy estudiante de la carrera de Ing en software y sistemas Computacionales.
          </h1>
          <p className="mb-8 leading-relaxed">
          Poseo conocimientos sobre los lenguajes de programación C, C++, C#, Java, Python, PHP y JavaScript, así como habilidades para diseñar y crear sitios web con html, css, JavaScript, React y TailwindCSS. Además he creado API's con el framework de Spring Boot de java. También tengo conocimientos sobre el manejo y creación de bases de datos con MySQL y Oracle. Soy una persona proactiva, creativa y con capacidad de aprendizaje y trabajo en equipo.
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
import React from 'react'

function Contact() {
  return (
    <section id="contact" className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40"> 
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white"> 
                Contáctame
            </h1>
            <form action="#" > 
                <div> 
                    <label for="firstName" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-white"> 
                                  Nombre o nombre de la empresa
                    </label> 
                    <input type="text" 
                           className="shadow-sm bg-gray-50 border 
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5" 
                           placeholder="Nombre"
                           required/> 
                  </div>
                <div> 
                    <label for="email" 
                           className="block my-2 text-left text-sm  
                                      font-medium text-white"> 
                        Email 
                    </label> 
                    <input type="email" 
                           className="shadow-sm bg-gray-50 border  
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5" 
                           placeholder="abc@email.com" 
                           required /> 
                </div> 
                <div> 
                    <label for="subject" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-white"> 
                        Asunto 
                    </label> 
                    <input type="text" 
                           className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-50 rounded-lg  
                                      border border-gray-300 shadow-sm " 
                           required /> 
                </div> 
                <div > 
                    <label for="message" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-white "> 
                        Mensaje 
                    </label> 
                    <textarea rows="6" 
                              className="block p-2.5 w-full text-sm  
                                         text-gray-900 bg-gray-50 rounded-lg  
                                         shadow-sm border border-gray-300 "/> 
                </div> 
                <div className='bg-gray-900'>
                  <button type="submit" 
                        className="mt-2 p-2 float-right text-gray-900   
                                   rounded-lg border-white  
                                   bg-white hover:scale-105"> 
                    Contáctame 
                  </button> 
                </div>
                
            </form> 
        </div> 
    </section>
  )
}

export default Contact

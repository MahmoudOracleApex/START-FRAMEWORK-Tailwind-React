import './DetailContact.css'
export default function DetailContact() {
  return (
    <>
        <div className="DetailContact bg-Navbar py-25 text-center text-white">
            <div className="container">
                <div className="grid grid-cols-3">
                
                        <div className="location">
                            <h3 className='uppercase'>location</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    
                    
                        <div className="web">
                            <h3 className='text-uppercase uppercase mb-2.5'>around the web</h3>
                            <div className="social flex justify-center mr-2">
                               <div className='w-[35px] h-[35px]  border p-1.5 rounded-full mr-2'>
                                     <i className="fa-brands fa-facebook-f "></i>
                               </div>
                               <div className='w-[35px] h-[35px]  border p-1.5 rounded-full mr-2'>
                                     <i className="fa-brands fa-twitter  "></i>
                               </div>
                               <div className='w-[35px] h-[35px]  border p-1.5 rounded-full mr-2'>
                                     <i className="fa-brands fa-linkedin-in   "></i>
                               </div>
                               <div className='w-[35px] h-[35px]  border p-1.5 rounded-full'>
                                     <i className="fa-solid fa-globe iconSocial"></i>
                               </div>
                                
                                
                               

                            </div>
                        </div>
                    

                    
                        <div className="freelancer uppercase">
                            <h3 className='text-uppercase'>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, open source Bootstrap theme created by <span>Route</span></p>

                        </div>
                                  
                    
                    
               
            </div>
            </div>
        </div>
    </>
)
}

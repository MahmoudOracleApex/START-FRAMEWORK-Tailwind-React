import './Portfolio.css'
import { useState } from 'react';



export default function Portfolio() {
    const [openModel,setOpenModel] = useState(false);
    let [imageOpen, setImageOpen] = useState(null);

    let changeImage=(img)=>{
      setImageOpen(img.url)
      console.log(imageOpen);
    }


  const images = Object.values(import.meta.glob('../../assets/images/*.{jpg,png,jpeg.svg}',{query:'?url' , import:'default' , eager:true}));
  console.log(images);

  const idImage = images.map((img)=>({id:crypto.randomUUID(),url:img}));
  console.log(idImage);
   

  return (
    <>
      <div className='portfolio relative pt-6' >
     
          <div className="titlePortfolio text-center ">
            <h2 className='text-4xl uppercase mb-4 font-extrabold text-Navbar pt-6'>portfolio component</h2>
              
          </div>
          <div className=' pb-3 text-lg w-96 m-auto  flex flex-row justify-center' >
            <div className='w-24 h-1 bg-Navbar relative top-1.5 right-3'></div>
            <div>
                  <i className='fa-solid fa-star text-2xl text-Navbar relative z-20 '>
                   </i>
                </div>
            <div className='w-24 h-1 bg-Navbar relative top-1.5 left-3'></div>
           
         </div>
       
          <div className='contentPortfolio my-7'>
            <div className='flex flex-wrap gap-1.5 w-[95%] m-auto'>

             {idImage.map((img)=> <div className="md:flex-1/4 sm:flex-1/2 " key = {img.id}>
                <div className="card rounded-xl relative group " onClick={()=>{setOpenModel(true) ;changeImage(img)  }}>
                  <img src={img.url} alt="" className='rounded-xl'/>
                  <div className="layout rounded-xl absolute top-0 left-0 w-full h-full flex justify-center items-center bg-Primary/50 hidden group-hover:flex">
                    <i className="fa-solid fa-plus  iconPlus text-4xl text-white"></i>
                  </div>
                </div>
              </div>)}

              
              
              
            </div>

            
          </div>
           
      
       {openModel?<div className='flex justify-center items-center absolute top-0 left-0 w-full h-full bg-Primary/25 z-10' onClick={()=>setOpenModel(false)} >
              <img src={imageOpen} alt="" className='w-1/2'   onClick={(e)=>e.stopPropagation()}/>
              </div> : ''}
      </div>
    

         

      
   
       
    
    </>
  )
}

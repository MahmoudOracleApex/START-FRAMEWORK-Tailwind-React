import'./About.css'
import IconStar from '../IconStar/IconStar'
export default function About() {
  return (
    <>
    <div className='About bg-Primary p-35 text-center text-white '>
      <div className='w-[95%] m-auto '>
        <div className='titleAbout text-uppercase py-10 '>
        <h2 className='text-4xl uppercase mb-4 font-extrabold text-white pt-6'> about component</h2>
      </div>
      <div className='text-white pb-3 text-lg w-96 m-auto  flex flex-row justify-center' >
            <div className='w-24 h-1 bg-white relative top-1.5 right-3'></div>
            <div>
                  <i className='fa-solid fa-star text-2xl relative z-20 '>
                   </i>
                </div>
            <div className='w-24 h-1 bg-white relative top-1.5 left-3'></div>
           
         </div>
      
      <div className='flex flex-wrap'>
        <div className='w-1/2'>
          <div className='pargraph text-start'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>

        <div className='w-1/2'>
          <div className='pargraph text-start'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
        
      </div>
      </div>
    </div>
    </>
  )
}

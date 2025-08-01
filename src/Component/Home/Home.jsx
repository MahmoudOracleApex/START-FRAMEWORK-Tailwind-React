import avataaars from '../../assets/avataaars.svg'
import './Home.css'

export default function Home() {
  console.log(avataaars)
  return (
    <>
    <div className='home bg-Primary py-40 text-center'>
        <div className=' w-80 m-auto'>
        <img src={avataaars} className='w-full' alt="" />
      </div>
      <div className='text-white pt-3' >
        <h1 className='text-3xl  uppercase mb-4 font-extrabold text-white pt-6'>START FRAMEWORK</h1>
      </div>

        <div className='text-white pb-3 text-lg w-96 m-auto  flex flex-row justify-center' >
            <div className='w-24 h-1 bg-white relative top-1.5 right-3'></div>
            <div>
                  <i className='fa-solid fa-star text-2xl relative z-20 '>
                   </i>
                </div>
            <div className='w-24 h-1 bg-white relative top-1.5 left-3'></div>
           
         </div>
    <div className='text-white bg-center'>
      <p >Graphic Artist - Web Designer - Illustrator</p>
    </div>

    </div>
    
    
    </>
  )
}

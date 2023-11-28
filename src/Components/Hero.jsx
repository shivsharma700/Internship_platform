import "./hero.css";

const Hero = () => {
  return (
    // hero section 
    <div className="heroSection mobile:w-screen w-[100%] mobile:h-[80vh] tablet:h-[100vh] flex items-center text-white" >
       <div className="container mobile:mx-auto tablet:mx-[5rem] laptop:mx-[8rem] " >
         <div className="   laptop:mr-[40%] mobile:text-center tablet:text-start " >
           <div className=" heading mobile:text-[1.7rem] mobile:font-bold tablet:text-[2.5rem] laptop:text-[3rem] tablet:font-bold ">We Empower you to find the right career path</div>
           <div className=" subheading mobile:text-[1.1rem] mobile:font-semibold tablet:text-[1.2rem] laptop:text-[1.5rem] tablet:font-semibold ">Join the Virtual Internship Program in emerging technologies with CodeClause</div>
           <button className=" bg-[#22CFB8] rounded w-[10rem] h-[3rem] mt-8 hover:bg-sky-500 " >Apply Now</button>
         </div>
       </div>
    </div>
  )
}

export default Hero
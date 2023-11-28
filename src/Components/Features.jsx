import {FaRegEnvelopeOpen} from "react-icons/fa6";
import {IoReceiptOutline} from "react-icons/io5";
import {PiCubeBold} from "react-icons/pi";
import {PiBriefcaseBold} from "react-icons/pi";

const Features = () => {
  return (
    // features
    <div className="bg-[#1b1b1b]" >
      <div className=" laptop:mx-[7rem] text-white flex flex-row justify-center flex-wrap " >

         <div className="left mobile:h-[22rem] laptop:h-[30rem] mobile:px-2 mobile:w-screen tablet:w-[32rem] laptop:w-[40%]  flex flex-col justify-center mobile:items-center laptop:items-start gap-8 ">
            <div className="heading mobile:text-3xl tablet:text-4xl mobile:text-center laptop:text-start font-bold heading">
              CodeClause Internship Program
            </div>
            <div className="subHeading  mobile:text-center laptop:text-start text-md font-semibold ">
              Join the Virtual Internship Program in emerging technologies with CodeClause. 
            </div>
            <div className=" mobile:mx-auto laptop:mx-0" >
              <button className="btn text-white hover:bg-[#6BDFCF] rounded-full w-[10rem]  bg-inherit border-[#6BDFCF] border-[2px] "> ABOUT US  </button>
            </div>
         </div>

         {/* features */}

         <div className="right  laptop:w-[60%] flex flex-wrap items-center  mobile:text-center laptop:text-start tablet:px-4 ">
            <div className=" feature tablet:px-2 laptop:px-0 flex flex-col justify-center mobile:items-center laptop:items-start gap-3 mobile:h-[12rem] tablet:h-[15rem] tablet:w-[50%] " >
               <div className="icon w-[2.5rem] h-[2.5rem] "><IoReceiptOutline className=" w-full h-full text-[#22CFB8] " /></div>
               <div className="heading text-xl font-bold ">
                  Get Certified
               </div>
               <div className="description text-md text-[#848484] ">
                  Get certified in your intrested domain with CodeClause Internship Program
               </div>
            </div>
            <div className=" feature tablet:px-2 laptop:px-0 flex flex-col justify-center mobile:items-center laptop:items-start gap-3 mobile:h-[12rem] tablet:h-[15rem] tablet:w-[50%] " >
               <div className="icon w-[2.5rem] h-[2.5rem] "><PiCubeBold className=" w-full h-full text-[#22CFB8] " /></div>
               <div className="heading text-xl font-bold ">
                  Trained by Experts
               </div>
               <div className="description text-md text-[#848484] ">
                  Get training by experts during internship period and consultancy.
               </div>
            </div>
            <div className=" feature tablet:px-2 laptop:px-0 flex flex-col justify-center mobile:items-center laptop:items-start gap-3 mobile:h-[12rem] tablet:h-[15rem] tablet:w-[50%] " >
               <div className="icon w-[2.5rem] h-[2.5rem] "><FaRegEnvelopeOpen className=" w-full h-full text-[#22CFB8] " /></div>
               <div className="heading text-xl font-bold ">
                  Explore Opportunities
               </div>
               <div className="description text-md text-[#848484] ">
                  Explore Opportunities by CodeClause and get rewarded with Swags.
               </div>
            </div>
            <div className=" feature tablet:px-2 laptop:px-0 flex flex-col justify-center mobile:items-center laptop:items-start gap-3 mobile:h-[12rem] tablet:h-[15rem] tablet:w-[50%] " >
               <div className="icon w-[2.5rem] h-[2.5rem] "><PiBriefcaseBold className=" w-full h-full text-[#22CFB8] " /></div>
               <div className="heading text-xl font-bold ">
                  Gain Experience
               </div>
               <div className="description text-md text-[#848484] ">
                  Gain experience in your intrested technology and add it in your resume or CV.
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Features
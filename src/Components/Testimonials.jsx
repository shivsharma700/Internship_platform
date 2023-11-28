
const Testimonials = () => {
  return (

    <div className="tablet:px-[10rem] bg-white ">

        <div className="heading text-center justify-center flex flex-col gap-6 my-[4rem]">
            <div className=" text-3xl font-bold tracking-wider" >TESTIMONIALS</div>
            <div className="h-[3px] w-[3rem] mx-auto bg-[#22CFB8] " ></div>
            <div className="text-md" >What people says about internship program</div>
        </div>

        {/* Testimonials */}
      <div className="carousel flex gap-[3rem] w-full">
        <div id="item1" className="carousel-item flex flex-col gap-[1rem] shadow-lg p-[2.2rem]  mobile:w-[15rem] tablet:w-[20rem] ">
            <div className="profile flex flex-row gap-4 ">
               <div className="img w-[5rem] h-[5rem] rounded-lg overflow-hidden ">
                   <img src="https://internship.codeclause.com/assets/img/testimonials/testimonials-4.jpeg" alt="" />
               </div>
               <div className="nameText flex flex-col ">
                   <div className="name text-xl font-semibold ">Ajit Sachin Patil </div>
                   <div className="company text-slate-400 ">CodeClause intern</div>
               </div>
            </div>
            <div className="description">
            It was very excellent experience working with you all.This will help me for building my bright future thankyou !
            </div>
        </div>
        <div id="item2" className="carousel-item flex flex-col gap-[1rem] shadow-lg p-[2.2rem]  mobile:w-[15rem]  tablet:w-[20rem] ">
            <div className="profile flex flex-row gap-4 ">
               <div className="img w-[5rem] h-[5rem] rounded-lg overflow-hidden ">
                   <img src="	https://internship.codeclause.com/assets/img/testimonials/testimonials-3.jpeg" alt="" />
               </div>
               <div className="nameText flex flex-col ">
                   <div className="name text-xl font-semibold ">Mihir Rajesh Panchal</div>
                   <div className="company text-slate-400 ">CodeClause intern</div>
               </div>
            </div>
            <div className="description">
            It was my first internship and I have never ever thought about that I'll receive any SWAGS in my whole life truly....
            It is happiest moment for me that I wanted to express but to be honest I can't find words how to write....
            So I just want to Thank CodeClause for this Beautiful T-shirt. Thank you for trusting me with the project. I could not have done it without your support. You are the reason which made me deserve this price.
            I cannot express how thankful I am for this input.
            </div>
        </div>
        <div id="item3" className="carousel-item flex flex-col gap-[1rem] shadow-lg p-[2.2rem]  mobile:w-[15rem]  tablet:w-[20rem] ">
            <div className="profile flex flex-row gap-4 ">
               <div className="img w-[5rem] h-[5rem] rounded-lg overflow-hidden ">
                   <img src="https://internship.codeclause.com/assets/img/testimonials/testimonials-2.jpg" alt="" />
               </div>
               <div className="nameText flex flex-col ">
                   <div className="name text-xl font-semibold ">Samiksha Madhukar Rodke</div>
                   <div className="company text-slate-400 ">CodeClause intern</div>
               </div>
            </div>
            <div className="description">
               
            It was my first internship and I have never ever thought about that I'll receive any SWAGS in my whole life truly....
            It is happiest moment for me that I wanted to express but to be honest I can't find words how to write....
            So I just want to Thank CodeClause for this Beautiful T-shirt. Thank you for trusting me with the project. I could not have done it without your support. You are the reason which made me deserve this price.
            I cannot express how thankful I am for this input.                
            </div>
        </div>
        <div id="item4" className="carousel-item flex flex-col gap-[1rem] shadow-lg p-[2.2rem]  mobile:w-[15rem]  tablet:w-[20rem]">
            <div className="profile flex flex-row gap-4 ">
               <div className="img w-[5rem] h-[5rem] rounded-lg overflow-hidden ">
                   <img src="https://internship.codeclause.com/assets/img/testimonials/testimonials-1.jpeg" alt="" />
               </div>
               <div className="nameText flex flex-col ">
                   <div className="name text-xl font-semibold ">Isha Paul</div>
                   <div className="company text-slate-400 ">CodeClause intern</div>
               </div>
            </div>
            <div className="description">
               Awsome.
            </div>
        </div> 
      </div> 
      <div className="flex justify-center w-full mt-[2rem] py-2 gap-2">
        <a href="#item1" className="btn btn-xs bg-slate-600 rounded-[50%] "></a> 
        <a href="#item2" className="btn btn-xs bg-slate-600 rounded-[50%] "></a> 
        <a href="#item3" className="btn btn-xs bg-slate-600 rounded-[50%] "></a> 
        <a href="#item4" className="btn btn-xs bg-slate-600 rounded-[50%] "></a>
      </div>
    </div>
  )
}

export default Testimonials
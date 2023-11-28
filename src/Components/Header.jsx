import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();

  return (

    // Header

    <div className=" bg-slate-200  mobile:h-[5.5rem] tablet:h-[5rem]  flex flex-row flex-wrap justify-around items-center  " >

        {/* logo */}

        <div onClick={()=>navigate} className="logo gap-2 flex flex-row justify-center items-center  ">
            <div className="logoImage w-[2.2rem] h-[2.2rem] mt-2 ">
               <img src="https://internship.codeclause.com/assets/img/codeclause.png" alt="" />
            </div>
            <div className=" text-3xl font-[700] tracking-widest " >
               Code 
               <span className=" text-[#22CFB8] " >Clause</span>
            </div>
        </div>

        {/* serachbar  */}

        <div className="searchbar " >
            <input className=" shadow-md  mobile:h-[1.8rem] tablet:w-[20rem] laptop:w-[30rem] tablet:h-[2.2rem] rounded pl-4 " type="text"placeholder="Search interships" />
        </div>
    </div>
  )
}

export default Header
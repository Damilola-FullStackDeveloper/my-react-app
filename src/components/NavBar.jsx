import { PiHouseThin } from "react-icons/pi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import logo from "../assets/WhatsApp Image 2024-02-15 at 17.43.41_a6ced7c7.jpg"
const NavBar = () => {
  return (
    
    <nav className="flex w-screen justify-between px-10 py-5 bg-white items-center shadow-md">
          <div>
          <img src={logo} alt=""  className="h-10"/>
          </div>
          
          <div><input type="text" placeholder="Search" className="boarder-2 border-slate-300"/></div>
          <div className="flex *:text-3xl gap-8 items-center">
            <PiHouseThin className="hover:text-5xl"/>
            <IoPaperPlaneOutline className="hover:text-5xl" />
            <FaRegCompass className="hover:text-5xl" />
            <CiHeart className="hover:text-5xl"/>
            <img src="https://qph.cf2.quoracdn.net/main-qimg-224c8562e36bb65dd57873a71a827b90" alt="" className="h-10 rounded-full"/>
          </div>
    </nav>
   


  )

}

export default NavBar;


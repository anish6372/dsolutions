import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch ,FaGlobe} from "react-icons/fa";


function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-b">
      
      <div className="text-2xl font-bold text-blue-600">DSolutions</div>

      
      <div className="hidden md:flex space-x-8 text-gray-700">
        <a href="#" className="hover:text-blue-600">Features</a>
        <a href="#" className="hover:text-blue-600">Solutions</a>
        <a onClick={() => navigate('/pricing')} className="hover:text-blue-600 cursor-pointer">Pricing</a>
        <a href="#" className="hover:text-blue-600">Resources</a>
      </div>


      <div className="hidden md:flex items-center space-x-4">
      <FaSearch size={20} />
      <div className="flex gap-1">
      <FaGlobe size={20}/>
      <span className="text-sm font-medium">EN</span>

      </div>
      
        <button onClick={() => navigate('/contact')} className="border border-blue-600 text-blue-600 px-4 py-2 rounded ">Get Started Free</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </div>

      
      <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-4">
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Solutions</a>
          <a onClick={() => navigate('/pricing')} className="hover:text-blue-600 cursor-pointer">Pricing</a>
          <a href="#" className="hover:text-blue-600">Resources</a>
          <FaSearch size={20} />
          <FaGlobe size={20}/>
          <button onClick={() => navigate('/contact')} className="border border-blue-600 text-blue-600 px-4 py-2 rounded">Get Started Free</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

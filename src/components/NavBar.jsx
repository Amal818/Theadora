import { useState } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from '../constants';

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width items-center">
        <img src={appleImg} alt="Apple" width={30} height={30} />

        <div className="hidden sm:flex flex-1 justify-center">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
          <div className="sm:hidden cursor-pointer" onClick={toggleSidebar}>
            <div className="w-6 h-[2px] bg-white mb-1"></div>
            <div className="w-6 h-[2px] bg-white mb-1"></div>
            <div className="w-6 h-[2px] bg-white"></div>
          </div>
        </div>
      </nav>

      <aside className={`fixed top-0 right-0 h-full w-[250px] text-white transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50 backdrop-blur-lg rounded-[20px]`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">THOADORA</h2>
          <button onClick={toggleSidebar} className="text-2xl font-bold">
            &times;
          </button>
        </div>
        <div className="flex flex-col items-start pl-6">
          {navLists.map((nav) => (
            <div key={nav} className="py-4 px-5 text-sm w-full cursor-pointer text-gray hover:text-white transition-all hover:pl-2" onClick={toggleSidebar}>
              {nav}
            </div>
          ))}
        </div>
      </aside>

      {isSidebarOpen && (
        <div className="fixed inset-0 opacity-50 z-40" onClick={toggleSidebar} />
      )}
    </header>
  );
};

export default NavBar;

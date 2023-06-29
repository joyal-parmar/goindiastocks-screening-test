import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="bg-white p-2 flex felx-wrap  text-black justify-between items-center border border-b-slate-500">
        <div className="flex flex-row gap-7">
          <Image src="/logewithname.png" width="70" height="70"></Image>
        
        <div className="relative mt-1 lg:w-[800px] shadow-inner">
          <div className="flex absolute inset-y-0 right-1 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-800  "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input className="bg-gray-300 shadow-inner shadow-gray-600 rounded-md border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  " />
        </div>
        </div>
        <div className=" flex flex-row gap-3 ">
          <div className="p-2">
            <span className="">Contact Us</span>
          </div>
          <div className="pt-2 pr-7 pl-7 pb-2 border border-black rounded-md">
            <button>SIGN UP</button>
          </div>
          <div className="pt-2 pr-7 pl-7 pb-2 border border-black rounded-md">
            <button>SIGN IN</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

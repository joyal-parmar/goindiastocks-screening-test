import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/src/component/Navbar";
import FeaturedCompanies from "@/src/component/Featuredcompany";
import Stock from "@/src/component/Stock";
import DisscussionFourm from "@/src/component/Discussionfourm";
import MarketStories from "@/src/component/MarketStories";
import Sidebar from "@/src/component/Sidebar";
import { useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showSidebar, SetshowSidebar] = useState(true);
  const [showFourm, SetshowFourm] = useState(false);
  const [showMarketstories, SetshowMarketstories] = useState(false);
  const [addicon, setAddicon] = useState(false);

  const onclickshowform = () => {
    SetshowFourm(true);
    SetshowMarketstories(false);
    setAddicon(true);
  };
  const onclickshowMarketstori = () => {
    SetshowMarketstories(true);
    SetshowFourm(false);
    setAddicon(false);
  };
  return (
    <>
      <Head>
        <title>GoIndiaStocks</title>
      </Head>
      <div className="flex flex-col ">
        <Navbar />
        <Stock />
        <div>
          <FeaturedCompanies />
        </div>
        <div className="flex flex-row md:hidden sm:block bg-blue-950 text-white font-bold ">
          <div className="flex flex-row justify-between">
            <button
              className="w-full h-full pt-2 pb-2 hover:bg-slate-900"
              onClick={onclickshowform}
            >
              DisscussionFourm
            </button>
            <button
              className="w-full h-full pt-2 pb-2 hover:bg-slate-900"
              onClick={onclickshowMarketstori}
            >
              MaretStories
            </button>
          </div>
        </div>
        <div className="flex flex-row bg-gray-100 relative  ">
          <div className="flex flex-row ">
            {showSidebar && (
              <div className="">
                <Sidebar />
              </div>
            )}
            <div className="pt-60 ">
              <button
                className={`bg-blue-950 h-20 w-4  item-center ${
                  showSidebar
                    ? "rotate-180 rounded-tl-md rounded-bl-md"
                    : "rounded-tr-md rounded-br-md"
                }`}
                onClick={() => SetshowSidebar((state) => !state)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="5.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grow flex flex-row justify-evenly h-full">
            <div
              className={`${showMarketstories ? "sm:hidden md:block" : "none"}`}
            >
              <DisscussionFourm />
            </div>

            <div className={`${showFourm ? "sm:hidden md:block" : "none"}`}>
              {" "}
              <MarketStories />
            </div>
          </div>
          <div
            className={`absolute bottom-1 right-32 lg:block ${
              addicon ? "md:block sm:hidden" : "md:hidden sm:block"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-16 h-16 rounded-full bg-blue-950"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

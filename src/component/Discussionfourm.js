import Template from "./DiscussionTemplate";
import Data from "./FourmData.json";

const DisscussionFourm = () => {
  return (
    <>
      <div className="p-2 flex flex-col gap-2">
        <div className="text-red-500 text-xl font-bold hidden lg:block">DISSCUSSION FOURM</div>
        <div className="flex flex-col gap-2 pl-10 pr-10">
          <div className="text-black font-bold justify-start">FIlters</div>
          <div className="flex flex-row p-4 border shadow-xl rounded-2xl gap-2 text-xs bg-white">
            <button className="bg-red-700  pr-6 pl-6 rounded-full">
              Sector1
            </button>
            <button className="bg-blue-700 pr-6 pl-6 rounded-full">
              Sector2
            </button>
            <button className="bg-yellow-400 pr-6 pl-6 rounded-full">
              Sector3
            </button>
            <div className="relative mt-1   ">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
              <input
                className="bg-gray-300 shadow-inner shadow-gray-600 rounded-3xl border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  "
                placeholder="Search Here"
              />
            </div>
          </div>
          <div className="lg:h-96 overflow-auto flex flex-col gap-2 pr-1 md:h-full ">
            {Data.map((data) => {
              return (
                <>
                  <Template
                    imgsrc={data.imgsrc}
                    User={data.user}
                    Text={data.text}
                    View={data.view}
                    Comment={data.comment}
                    Like={data.like}
                    Sector={data.sector}
                    Time={data.time}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default DisscussionFourm;

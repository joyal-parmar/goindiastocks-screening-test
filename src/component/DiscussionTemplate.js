import Image from "next/image";

const Template = ({
  imgsrc,
  Time,
  User,
  View,
  Like,
  Comment,
  Sector,
} = props) => {
  return (
    <>
      <div className="flex flex-col p-4 rounded-xl shadow-xl bg-white gap-2 relative ">
        <div className="text-xs text-blue-700 absolute right-2 font-semibold">
          {Time}
        </div>
        {imgsrc && (
          <div className="flex flex-row justify-center bg-white">
            <Image src={imgsrc} width="300" height="300" className=" "></Image>
          </div>
        )}
        <div className=" flex flex-row gap-2  ">
          <Image
            src="/male.png"
            width="40"
            height="40"
            className="rounded-full bg-yellow-800"
          />
          <div className="text-black text-sm font-bold p-2">{User}</div>
          <button
            className={`text-xs    pr-8 pl-8 rounded-3xl 
          ${Sector === "Sector1" ? "bg-red-700" : "none"}
          ${Sector === "Sector2" ? "bg-blue-700" : "none"}
          ${Sector === "Sector3" ? "bg-yellow-400" : "none"}
          `}
          >
            {Sector}
          </button>
        </div>
        <div className="text-black text-sm pl-14 font-medium break-words ">
          <p>
            Loream Ipsum is simply dummy text of the printing <br />{" "}
            andtypesetting industrie
          </p>
        </div>
        <div className="flex flex-row gap-8 pl-14">
          <div className="text-black flex flex-row gap-2 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 stroke-slate-950 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            {Like}
          </div>
          <div className="text-black flex flex-row gap-2 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>{" "}
            {View}
          </div>
          <div className="text-black flex flex-row gap-2 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            {Comment}
          </div>
          <div className="text-black flex flex-row gap-2 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
            Share
          </div>
        </div>
      </div>
    </>
  );
};
export default Template;

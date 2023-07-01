import Image from "next/image";

const MarketStories = () => {
  return (
    <>
      <div className="flex flex-col p-2 gap-8 ">
        <div className="text-red-500 text-xl font-bold invisible lg:visible">MARKET STORIES</div>
        <div class="grid sm:grid-cols-1 md:grid-cols-1 md:gap-4 xl:grid-cols-2 gap-1 lg:gap-2 xl:gap-4">
          <div className="relative w-38 h-28 md:w-72 md:h-36 lg:w-48 lg:h-36">
            <Image
              src="/download.jpeg"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative w-38 h-28 md:w-72 md:h-36 lg:w-48 lg:h-36">
            <Image
              src="/download (1).jpeg"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative w-38 h-28 md:w-72 md:h-36 lg:w-48 lg:h-36">
            <Image
              src="/download.jpeg"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative w-38 h-28 md:w-72 md:h-36 lg:w-48 lg:h-36">
            <Image
              src="/download (1).jpeg"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MarketStories;

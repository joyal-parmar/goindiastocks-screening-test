import Image from "next/image";
import Marquee from "react-fast-marquee";

const FeaturedCompanies = () => {
  return (
    <>
      <div className="flex flex-col bg-white">
        <div className="text-red-500 p-3 font-bold">FEATURED COMPANIES</div>
        <div className="bg-sky-100 p-2 flex flex-row">
          <Marquee direction="left">
          
            <div className="bg-sky-100 flex flex-row gap-16">
              <Image
                src="/caprinew1.jpg"
                width="100"
                height="100"
                className="bg-sky-100"
              />

              <Image
                src="/ganeshhousing.jpg"
                width="100"
                height="100"
                className="bg-sky-100"
              />
              <Image
                src="/fino.png"
                width="100"
                height="100"
                className="bg-sky-100"
              />
              <Image
                src="/gravita.jpg"
                width="100"
                height="100"
                className="bg-sky-100"
              />
              <Image
                src="/godawari.jpg"
                width="100"
                height="100"
                className="bg-sky-100"
              />
              <Image
                src="/dtpatten1.png"
                width="100"
                height="100"
                className="bg-sky-100"
              />
              <Image
                src="/deepind.png"
                width="100"
                height="100"
                className="bg-sky-100"
              />
              <Image
                src="/caprinew1.jpg"
                width="100"
                height="100"
                className="bg-sky-100"
              />

              <Image
                src="/ganeshhousing.jpg"
                width="100"
                height="100"
                className="bg-sky-100"
              />
            </div>
            </Marquee>
         
        </div>
      </div>
    </>
  );
};
export default FeaturedCompanies;

import Image from "next/image";
import Marquee from "react-fast-marquee";
import FeaturecompanyData from "./FeaturecompanyData.json";

const FeaturedCompanies = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-100 ">
        <div className="text-red-500 p-3 font-bold hidden lg:block">
          FEATURED COMPANIES
        </div>
        <div className="lg:bg-sky-100 md:bg-white p-2 flex flex-row">
          <Marquee direction="left">
            <div className=" flex flex-row gap-16 ">
              {FeaturecompanyData.map((data) => {
                return (
                  <>
                    <div className="">
                      <Image
                        src={data.imgsrc}
                        width="90"
                        height="110"
                        className="object-cover lg:p-0 md:pt-5 md:pb-5 lg:rounded-none lg:border-none md:rounded-full md:border-2 md:border-red-700"
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};
export default FeaturedCompanies;

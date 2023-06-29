import Marquee from "react-fast-marquee";
import Records from "./marketrecords.json";

const Marketadd = () => {
  return (
    <>
    <Marquee direction="right">
      
        <div className="flex flex-row gap-4">
          {Records.map((records) => {
            return (
              <>
                <div className="flex flex-row gap-6">
                  <div> {records.companyname}</div>
                  <div> {records.value}</div>
                  <div className="text-green-700">{records.percentage}</div>
                </div>
              </>
            );
          })}
        </div>
      
      </Marquee>
    </>
  );
};
export default Marketadd;

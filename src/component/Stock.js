import Marquee from "react-fast-marquee";
import StockRecords from "./Stockrecords.json";

const Stock = () => {
  return (
    <>
    <Marquee direction="right">
      
        <div className="flex flex-row gap-4">
          {StockRecords.map((records) => {
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
export default Stock;

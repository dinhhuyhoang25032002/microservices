import { Statiscal } from "~/services/data";
type SectionStatiscalProps = {
  data: Statiscal[];
};
const SectionStatiscal = ({ data }: SectionStatiscalProps) => {
  return (
    <div className="px-20 bg-[#eee] sm:px-14 xs:px-5">
      <div className=" flex justify-around rounded-xl items-center py-6 px-10 xs:px-0 ">
        {data.map((item, index) => {
          return (
            <div
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <span className="text-5xl font-semibold sm:text-4xl xs:text-2xl">
                {item.Statiscal}
              </span>
              <span className="">{item.typeStatiscal}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionStatiscal;

import Arduino from "~/components/devices/Arduino";
import Esp from "~/components/devices/ESP";
import STM32 from "~/components/devices/STM32";

const ControlBlock = () => {
  return (
    <div className="flex flex-col justify-around items-center  gap-4  p-4 border-2 border-dashed border-gray-500 rounded h-full">
      <div className="flex flex-col items-center justify-center ">
        <span className="font-semibold text-xl">ESP</span>
        <Esp />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <span className="font-semibold text-xl">STM32</span>
        <STM32 />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <span className="font-semibold text-xl">Arduino</span>
        <Arduino />
      </div>
    </div>
  );
};

export default ControlBlock;

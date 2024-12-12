import Keybroad from "~/components/devices/Keybroad";
import LCD from "~/components/devices/LCD";
import Button from "~/components/devices/Button";
type DisplayLcdProps = {
  temperature: string | number;
  light: string | number;
  gas: string | number;
  humidity: string | number;
};
const DisplayLcd = ({ temperature, light, gas, humidity }: DisplayLcdProps) => {
  return (
    <div className=" flex flex-col items-center justify-around gap-2  p-4 border-2 border-dashed border-gray-500 rounded h-full">
      <div className=" flex  flex-col items-center justify-center gap-1 ">
        <span className="font-semibold text-xl">LCD</span>
        <LCD
          temperature={temperature}
          humidity={humidity}
          gas={gas}
          light={light}
        />
      </div>
      <hr />
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <div className="flex justify-around  w-full">
          <div>
            <span className="font-semibold text-xl">SW1</span>
            <Button />
          </div>
          <div>
            <span className="font-semibold text-xl">SW2</span>
            <Button />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-2">
          <span className="font-semibold text-xl">Keybroad</span>
          <Keybroad />
        </div>
      </div>
    </div>
  );
};

export default DisplayLcd;

import ControlBlock from "./ControlBlock";
import DisplayLcd from "./DisplayLcd";
import DisplayOled from "./DisplayOled";
// import InputSensor from "./InputSensor";

type SchemaKitbProps = {
  temperature: string | number;
  light: string | number;
  gas: string | number;
  humidity: string | number;
  led?: string | number;
  onSwitchChange: (id: string, state: boolean) => void;
};

const SchemaKitb = ({
  temperature,
  light,
  gas,
  humidity,
  // led,
  // onSwitchChange,
}: SchemaKitbProps) => {
  return (
    <div className="flex items-start justify-around py-16 w-full xs:flex-col xs:px-4 xs:gap-3 xs:py-10">
      <div className="w-1/5 h-[537px] bg-white xs:w-full ">
        <DisplayOled />
      </div>
      <div className="w-1/5 h-[537px] bg-white xs:w-full">
        <DisplayLcd
          temperature={temperature}
          humidity={humidity}
          gas={gas}
          light={light}
        />
      </div>
      {/* <div className="w-1/4 h-[537px] bg-white xs:w-full">
        <InputSensor led={led} onSwitchChange={onSwitchChange} />
      </div> */}
      <div className="w-1/4 h-[537px] bg-white xs:w-full">
        <ControlBlock />
      </div>
    </div>
  );
};

export default SchemaKitb;

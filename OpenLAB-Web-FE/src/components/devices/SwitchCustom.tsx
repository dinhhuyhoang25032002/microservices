"use client";
import Switch from "react-switch";


type SwitchCustomProps = {
  id: string;
  value: boolean;
  onSwitchChange: (value: boolean) => void;
};

const SwitchCustom = ({ id, onSwitchChange, value }: SwitchCustomProps) => {
  // const handleOnChange = () => {
  //   onSwitchChange(!value);
  // };

  return (
    <Switch
      checked={value}
      id={id}
      onChange={() => onSwitchChange(!value)}
      checkedIcon={
        <p className="text-white pr-1 pt-[2px] text-end font-medium">ON</p>
      }
      uncheckedIcon={
        <p className="text-white pl-1 pt-[2px] text-start font-medium">OFF</p>
      }
      width={70}
    />
  );
};

export default SwitchCustom;

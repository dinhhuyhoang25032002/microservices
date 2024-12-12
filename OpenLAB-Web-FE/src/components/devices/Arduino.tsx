import arduinoIcon from "~/assets/device-imge/Arduino.png";
import Image from 'next/image'
const Arduino = () => {
  return (
    <div>
      <Image
        alt="arduino-image"
        src={arduinoIcon}
        className="w-52 object-fill object-center h-36"
      />
    </div>
  );
};
export default Arduino;

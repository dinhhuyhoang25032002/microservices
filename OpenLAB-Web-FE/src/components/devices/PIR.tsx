import PIRicon from "~/assets/device-imge/PIR.png";
import Image from 'next/image'
const PIRSensor = () => {
  return (
    <div>
      <Image
        alt="image-pir"
        src={PIRicon}
        className="w-16 h-20 object-contain object-center"
      />
    </div>
  );
};
export default PIRSensor;

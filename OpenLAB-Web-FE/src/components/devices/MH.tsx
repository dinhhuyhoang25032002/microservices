import MHicon from "~/assets/device-imge/MH.png";
import Image from 'next/image'
const MHSensor = () => {
  return (
    <div>
      <Image src={MHicon} alt="MHicon" className="w-11 h-24 object-contain object-center" />
    </div>
  );
};
export default MHSensor;

import Mq02 from "~/assets/device-imge/MQ2.png";
import Image from 'next/image'
const MQ02Sensor = () => {
  return (
    <div>
      <Image src={Mq02} alt="Mq02" className="w-11 h-24 object-contain object-center" />
    </div>
  );
};
export default MQ02Sensor;

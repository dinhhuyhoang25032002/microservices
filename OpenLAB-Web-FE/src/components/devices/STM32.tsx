import STM32Icon from "~/assets/device-imge/stm32.png";
import Image from 'next/image'
const STM32Sensor = () => {
  return (
    <div>
      <Image
        alt="stm32-image"
        src={STM32Icon}
        className="w-52 h-20 object-fill  object-center"
      />
    </div>
  );
};
export default STM32Sensor;

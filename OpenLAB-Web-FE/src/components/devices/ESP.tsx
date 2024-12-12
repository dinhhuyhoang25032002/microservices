import espImage from "~/assets/device-imge/ESP.jpg";
import Image from 'next/image'
const Esp = () => {
  return (
    <div>
      <Image
        alt="stm32-image"
        src={espImage}
        className="w-52 h-20 object-fill object-center"
      />
    </div>
  );
};

export default Esp;

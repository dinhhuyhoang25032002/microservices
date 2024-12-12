import RGBIcon from "~/assets/device-imge/RGB.png";
import Image from 'next/image'
const RGBdevice = () => {
  return (
    <div>
      <Image
        alt="image-rgb"
        src={RGBIcon}
        className="object-contain object-center h-20"
      />
    </div>
  );
};
export default RGBdevice;

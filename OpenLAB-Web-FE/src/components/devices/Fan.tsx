import fanImage from "~/assets/device-imge/fan.jpg";
import Image from 'next/image'
const Fan = () => {
  return (
    <div>
      <Image
        src={fanImage}
        alt="fan-Image"
        className="w-44 h-44 object-cover object-center"
      />
    </div>
  );
};

export default Fan;

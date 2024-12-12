import realyImage from "~/assets/device-imge/relay.jpg";
import Image from 'next/image'
const Relay = () => {
  return (
    <div>
      <Image
        src={realyImage}
        alt="realy-image"
        className="object-cover object-left-top w-20 h-24"
      />
    </div>
  );
};

export default Relay;

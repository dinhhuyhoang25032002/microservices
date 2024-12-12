import DHTImage from "~/assets/device-imge/DHT11.jpg";
import Image from 'next/image'
const DHT11Sensor = () => {
  return (
    <div className="container-dht11 flex ">
      <Image
        src={DHTImage}
        alt="image-dht"
        className="object-contain object-center w-12 h-28"
      />
    </div>
  );
};
export default DHT11Sensor;

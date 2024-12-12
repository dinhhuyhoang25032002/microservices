import buzzer from "~/assets/device-imge/Buzzer.png";
import Image from 'next/image'
const Buzzer = () => {
  return (
    <div>
      <Image src={buzzer} className=" h-20 object-cover object-center w-20" alt="buzzer" />
    </div>
  );
};
export default Buzzer;

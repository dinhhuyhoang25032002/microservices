import servoImage from "~/assets/device-imge/Servo.jpg";
import Image from 'next/image'
const Servo = () => {
  return (
    <div>
      <Image
        src={servoImage}
        alt="servo-Image"
        className="object-contain object-right-top w-44"
      />
    </div>
  );
};

export default Servo;

import led7 from "~/assets/device-imge/LED_7_Thanh.jpg";
import Image from 'next/image'
const Led7 = () => {
  return (
    <div>
      <Image
        src={led7}
        alt="LED_7_Thanh"
        className="object-fill object-center h-20"
      />
    </div>
  );
};

export default Led7;

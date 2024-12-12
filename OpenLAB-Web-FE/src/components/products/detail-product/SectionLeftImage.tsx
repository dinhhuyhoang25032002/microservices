import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
type SectionLeftImageProps = {
  image: string;
  data: string[];
};

const SectionLeftImage = ({ image, data }: SectionLeftImageProps) => {
  return (
    <div className="flex">
      <div>
        <Image src={image} alt="image-section-left-product" />
      </div>
      <div>
        <ul>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <IoMdCheckmark />
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SectionLeftImage;

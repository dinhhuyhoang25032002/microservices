import { LuKeyRound } from "react-icons/lu";
import { IoIosCloudOutline } from "react-icons/io";
const CloudKey = () => {
  return (
    <div className="relative">
      <LuKeyRound className="text-[60px] absolute top-20 left-[66px] text-red-600" />
      <IoIosCloudOutline className="text-[200px] absolute text-red-600" />
    </div>
  );
};

export default CloudKey;

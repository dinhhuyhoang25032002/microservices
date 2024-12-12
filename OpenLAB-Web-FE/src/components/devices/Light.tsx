import { RiLightbulbFlashFill } from "react-icons/ri";
type LightProps = {
  led?: string | number;
};
const Light = ({ led }: LightProps) => {
  console.log(led === 1, typeof led);

  return (
    <div className="Light-container">
      {led === 1 ? (
        <RiLightbulbFlashFill className="text-7xl text-yellow-500" />
      ) : (
        <RiLightbulbFlashFill className="text-7xl" />
      )}
    </div>
  );
};
export default Light;

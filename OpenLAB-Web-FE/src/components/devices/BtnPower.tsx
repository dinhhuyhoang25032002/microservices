import { FaPowerOff } from "react-icons/fa6";
const BtnPower = () => {
  return (
    <div className="btn-power-container rounded-full w-7 h-7 flex justify-center items-center border-8 border-solid border-green-700 ">
      <button
        className="btn-content flex justify-center items-center w-full h-full rounded-full bg-red-600 text-center"
        // onClick={() => handleChangePowerBtn()}
      >
        <FaPowerOff />
      </button>
    </div>
  );
};

export default BtnPower;

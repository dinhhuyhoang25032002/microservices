
const Power = () => {
  const onPowerBtn = true;
  return (
    <div className="power-src-container border-4 border-solid border-black w-32 h-20 cursor-pointer">
      <div className="power-src-body border-t-4 border-b-4 border-l-4 border-r-4 border-gray-600 border-solid">
        <div
          className={
            onPowerBtn === true
              ? "flex flex-col h-full w-full bg-black text-end px-6 py-1"
              : "flex flex-col h-full w-full bg-black text-end px-6 py-1 "
          }
        >
          <span className="title-v text-lg font-medium font-changa text-red-600 text-center">
            5.0 V
          </span>
          <span className="title-a text-lg font-medium font-changa text-blue-500 text-center">
            0.0 A
          </span>
        </div>
      </div>
    </div>
  );
};
export default Power;

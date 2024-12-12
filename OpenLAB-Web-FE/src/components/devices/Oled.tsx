const Oled = () => {
  return (
    <div className="lcd-area h-20">
      <div className="lcd-border border-8 border-solid border-blue-600 h-full cursor-pointer rounded">
        <div className="lcd-container border-4 border-solid border-black h-full ">
          <div className="lcd-content h-full w-40 font-changa font-medium pl-2 bg-gray-700 text-lg justify-center items-start">
            <span className="text-white">Open Lab</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Oled;

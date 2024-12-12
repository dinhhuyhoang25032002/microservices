type LcdProps = {
  temperature: string | number;
  light: string | number;
  gas: string | number;
  humidity: string | number;
};
const Lcd = ({ temperature, light, gas, humidity }: LcdProps) => {
  return (
    <div className="lcd-area h-20">
      <div className="lcd-border border-8 border-solid border-green-600 h-full cursor-pointer rounded">
        <div className="lcd-container border-4 border-solid border-black h-full">
          <div className="lcd-content h-full w-40 font-changa font-medium pl-2 bg-green-400 text-lg justify-center items-start flex-col flex">
            {temperature === 0 && light === 0 && gas === 0 && humidity === 0 ? (
              <span></span>
            ) : (
              <>
                <div className="flex w-full">
                  <span className="font-changa w-1/2">t:{temperature}</span>
                  <span className="font-changa w-1/2">h:{humidity}</span>
                </div>
                <div className="flex w-full">
                  <span className="font-changa w-1/2">l:{light}</span>
                  <span className="font-changa w-1/2">g:{gas}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lcd;

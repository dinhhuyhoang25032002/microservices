const Keybroad = () => {
  return (
    <div className="keybroad-container  flex justify-center items-center">
      <div className="keybroad-content flex gap-2 flex-col bg-gray-950 w-full h-full justify-center items-center px-4 p-3 rounded">
        <div className="content-button flex gap-2 justify-center items-center">
          <button
            value={1}
            className="border-2 border-white w-9 h-9 focus:bg-gray-700 rounded bg-black text-white"
          >
            1
          </button>
          <button
            value={2}
            className="btn-style  bg-black text-white border-2 border-white w-9 h-9 focus:bg-gray-700 rounded"
          >
            2
          </button>
          <button
            value={3}
            className="btn-style  bg-black text-white border-2 border-white w-9 h-9 focus:bg-gray-700 rounded"
          >
            3
          </button>
        </div>
        <div className="content-button flex gap-2 justify-center items-center">
          <button
            value={4}
            className="btn-style  bg-black text-white border-2 border-white w-9 h-9 focus:bg-gray-700 rounded"
          >
            4
          </button>
          <button
            value={5}
            className="btn-style  bg-black text-white border-2 border-white w-9 h-9 focus:bg-gray-700 rounded"
          >
            5
          </button>
          <button
            value={6}
            className="btn-style  bg-black text-white border-2 border-white w-9 h-9 focus:bg-gray-700 rounded"
          >
            6
          </button>
        </div>
        <div className="content-button flex gap-2 justify-center items-center">
          <button
            value={7}
            className="btn-style  bg-black text-white border-2 border-white w-9 h-9 focus:bg-gray-700 rounded"
          >
            7
          </button>
          <button
            value={8}
            className="btn-style  bg-black text-white border-2 border-white w-9 h-9 focus:bg-gray-700 rounded"
          >
            8
          </button>
          <button
            value={9}
            className="btn-style  bg-black text-white border-2 border-white w-9 h-9 focus:bg-gray-700 rounded"
          >
            9
          </button>
        </div>
        <div className="content-button flex gap-2 justify-center items-center">
          <button
            value={"*"}
            className="btn-style  bg-black text-white border-2 border-white w-9 h-9 focus:bg-gray-700 rounded"
          >
            *
          </button>
          <button
            value={0}
            className="btn-style  bg-black text-white border-2 border-white w-9 h-9 focus:bg-gray-700 rounded"
          >
            0
          </button>
          <button
            value={"#"}
            className="btn-style  bg-black text-white border-2 border-white w-9 h-9 focus:bg-gray-700 rounded"
          >
            #
          </button>
        </div>
      </div>
    </div>
  );
};
export default Keybroad;

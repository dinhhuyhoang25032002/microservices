import LeftContentHeader from "~/components/header/LeftContentHeader";
import RightContentHeader from "~/components/header/RightContentHeader";

const Header = () => {
  return (
    <div className="body-header flex flex-col shadow-xl  bg-white z-30">
      <div className="flex  justify-around py-3 sm:py-0 xs:py-0">
        <LeftContentHeader />
        <RightContentHeader />
      </div>
    </div>
  );
};

export default Header;

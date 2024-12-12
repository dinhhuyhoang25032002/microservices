
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import flagVN from "~/assets/icon/vietnam_flags.png";
import flagEN from "~/assets/icon/united-states_flags.png";
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import { ReactNode } from "react";
type NavContactProps = {
  contentLeft?: ReactNode;
  contentRight?: ReactNode;
};
const NavContact = ({ contentLeft }: NavContactProps) => {
  return (
    <div
      className="flex  justify-between items-center px-14 py-1 bg-gradient-to-r from-[#080541] from-0% via-[#090979] via-58% to-[#06044a] to-100% text-white
    xs:flex-col xs:px-0 "
    >
      <div className="flex xl:w-[20%] justify-center">{contentLeft}</div>
      <div className="flex  gap-2 items-center  xl:w-[20%] justify-center">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="xs:w-full sm:w-full">
              <div className="flag-container w-[46px] h-[46px] flex gap-2 justify-center items-center">
                <div>
                  <Image
                    alt="VN-Flag"
                    src={flagVN}
                    className="object-cove cursor-pointer"
                    data-tooltip-id="option-language"
                  />
                </div>
                <FaCaretDown />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white">
              <div className="container-option flex bg-white">
                <div className="content-option flex flex-col text-black text-sm">
                  <div className="cursor-pointer flex items-center  px-2 hover:bg-[#d2d3d4] gap-4 hover:text-white rounded-sm">
                    <Image
                      alt="flag-en"
                      src={flagEN}
                      className="object-cove cursor-pointer w-[40px] h-[40px]"
                    />
                    <span>English (US)</span>
                  </div>
                  <div className="cursor-pointer flex items-center px-2 hover:bg-[#d2d3d4] gap-4 hover:text-white rounded-sm ">
                    <Image
                      alt="flag-vn"
                      src={flagVN}
                      className="object-cove cursor-pointer w-[40px] h-[40px]"
                    />
                    <span>Tiếng Việt</span>
                  </div>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default NavContact;

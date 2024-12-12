import { ReactNode } from "react";

type ParameterDashboardProps = {
  device: ReactNode;
  nameDevice: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  value1: string | number;
  value2?: string | number;
  id: string;
};

const ParameterDashboard = ({
  device,
  nameDevice,
  icon1,
  icon2,
  value1,
  value2,
}: ParameterDashboardProps) => {
  return (
    <div className="flex gap-2 h-[113px]">
      <div>{device}</div>
      <div className="flex flex-col items-start">
        <span className="font-semibold">{nameDevice}</span>

        <div className="flex items-center gap-1">
          <span>{icon1}</span>
          <span>{value1}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>{icon2}</span>
          <span>{value2}</span>
        </div>
      </div>
    </div>
  );
};

export default ParameterDashboard;

"use client";
import { useEffect, useState } from "react";
import DashboardChart from "./DashboardChart";
import ParameterDashboard from "./ParameterDashboard";
import DHT11Sensor from "~/components/devices/DHT11";
import { FaThermometerHalf } from "react-icons/fa";
import { IoSnowSharp } from "react-icons/io5";
import MQ02Sensor from "~/components/devices/MQ02";
import { GiGasPump } from "react-icons/gi";
import MHSensor from "~/components/devices/MH";
import { LuSunMedium } from "react-icons/lu";
type DashboardProps = {
  temperature: number;
  humidity: number;
  gas: number;
  light: number;
};

const Dashboard = ({ temperature, light, gas, humidity }: DashboardProps) => {
  // console.log("check timestamp", timestamps);
  const [temperatureHistory, setTemperatureHistory] = useState<number[]>([]);
  const [humidityHistory, setHumidityHistory] = useState<number[]>([]);
  const [gasHistory, setGasHistory] = useState<number[]>([]);
  const [lightHistory, setLightHistory] = useState<number[]>([]);
  const [timestamps, setTimestamps] = useState<string[]>([]);
  useEffect(() => {
    const now = new Date().toLocaleTimeString();
    setTimestamps((prev) => {
      const newTimestamps = [...prev, now];
      return newTimestamps.length >= 10
        ? newTimestamps.slice(1)
        : newTimestamps;
    });

    setTemperatureHistory((prev) => {
      const newHistory = [...prev, temperature];
      return newHistory.length >= 10 ? newHistory.slice(1) : newHistory;
    });

    setHumidityHistory((prev) => {
      const newHistory = [...prev, humidity];
      return newHistory.length >= 10 ? newHistory.slice(1) : newHistory;
    });

    setGasHistory((prev) => {
      const newHistory = [...prev, gas];
      return newHistory.length >= 10 ? newHistory.slice(1) : newHistory;
    });

    setLightHistory((prev) => {
      const newHistory = [...prev, light];
      return newHistory.length >= 10 ? newHistory.slice(1) : newHistory;
    });
  }, [temperature, light, gas, humidity]);

  return (
    <div className="flex flex-col w-full px-16 items-center py-10 gap-10 xs:px-4">
      <h1 className="text-center font-semibold  text-4xl xs:text-2xl">
        Dashboard
      </h1>
      <div className="flex items-center justify-between w-full xs:flex-col ">
        <div className="w-[23%] xs:w-full flex items-center justify-center flex-col shadow-xl bg-white px-6 xs:px-2 py-6 rounded">
          <div className="w-full">
            <ParameterDashboard
              device={<DHT11Sensor />}
              id="dht4"
              nameDevice={"DHT11"}
              value1={temperature}
              icon1={<FaThermometerHalf />}
            />
          </div>

          <DashboardChart
            dataX={timestamps}
            dataY={temperatureHistory}
            value={temperature}
            nameChart="Temperature"
          />
        </div>
        <div className="w-[23%] xs:w-full flex items-center justify-center flex-col shadow-xl bg-white px-6 xs:px-2 py-6 rounded">
          <div className="w-full">
            <ParameterDashboard
              device={<DHT11Sensor />}
              id="dht3"
              nameDevice={"DHT11"}
              value1={humidity}
              icon1={<IoSnowSharp />}
            />
          </div>

          <DashboardChart
            dataX={timestamps}
            dataY={humidityHistory}
            value={humidity}
            nameChart="Humidy"
          />
        </div>
        <div className="w-[23%] xs:w-full flex items-center justify-center flex-col shadow-xl bg-white px-6 xs:px-2 py-6 rounded">
          <div className="w-full">
            <ParameterDashboard
              device={<MQ02Sensor />}
              id="mq2"
              nameDevice={"MQ02"}
              value1={gas}
              icon1={<GiGasPump />}
            />
          </div>

          <DashboardChart
            dataX={timestamps}
            dataY={gasHistory}
            value={gas}
            nameChart="Gas"
          />
        </div>
        <div className="w-[23%] xs:w-full flex items-center justify-center flex-col shadow-xl bg-white px-6 xs:px-2 py-6 rounded">
          <div className="w-full">
            <ParameterDashboard
              device={<MHSensor />}
              id="mh"
              nameDevice={"MH"}
              value1={light}
              icon1={<LuSunMedium />}
            />
          </div>

          <DashboardChart
            dataX={timestamps}
            dataY={lightHistory}
            value={light}
            nameChart="Light"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

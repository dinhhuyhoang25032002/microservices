"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import moment from "moment";
import { ref, onValue, set } from "firebase/database";
import { LineChartComponent } from "~/components/dashboard/LineChart";
import { BarChartComponent } from "~/components/dashboard/BarChart";
import { database } from "~/configs/firebase.config";
import { useAuthStore } from "~/store/auth/AuthStore";

export default function DashboardParams() {
  const [temperatureHistory, setTemperatureHistory] = useState<string[]>([]);
  const [humidityHistory, setHumidityHistory] = useState<string[]>([]);
  // const [gasHistory, setGasHistory] = useState<number[]>([]);
  const [lightHistory, setLightHistory] = useState<string[]>([]);
  const [highestTemperature, setHighestTemperature] = useState(0);
  const [highestHumidy, setHighestHumidy] = useState(0);
  const [highestLight, setHighestLight] = useState(0);
  const [timestampsTemperature, setTimestampsTemperature] = useState<string[]>(
    []
  );
  const [timestampsHumidity, setTimestampsHumidity] = useState<string[]>([]);
  const [timestampsLight, setTimestampsLight] = useState<string[]>([]);
  const [isNode, setNode] = useState("");
  const { user } = useAuthStore();
  const { _id, nodeId } = user;

  useEffect(() => {
    setTemperatureHistory([]);
    setTimestampsTemperature([]);
    const date = moment().startOf("day").valueOf() / 1000;
    const now = new Date().toLocaleTimeString();
    const urlTemperature = !isNode
      ? `/${_id}/${
          nodeId ? nodeId[0] : ""
        }/dailyTemperature/${date}/highestTemperature`
      : `/${_id}/${isNode}/dailyTemperature/${date}/highestTemperature`;

    const dataRef = ref(database, urlTemperature);
    let maxTemperature = 0;
    const urlMaxTemperature = !isNode
      ? `/${_id}/${
          nodeId ? nodeId[0] : ""
        }/dailyTemperature/${date}/maxTemperature`
      : `/${_id}/${isNode}/dailyTemperature/${date}/maxTemperature`;
    const dataRefMax = ref(database, urlMaxTemperature);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const currentValue = snapshot.val();
      if (currentValue > maxTemperature) {
        maxTemperature = currentValue;
        set(dataRefMax, maxTemperature);
      }
      setTimestampsTemperature((prev) => {
        const newTimestamps = [...prev, now];
        return newTimestamps.length >= 10
          ? newTimestamps.slice(1)
          : newTimestamps;
      });
      setTemperatureHistory((prev) => {
        const newHistory = [...prev, snapshot.val()];
        return newHistory.length >= 10 ? newHistory.slice(1) : newHistory;
      });
    });
    const unsubscribeMax = onValue(dataRefMax, (snapshot) => {
      if (snapshot.exists()) {
        setHighestTemperature(snapshot.val());
      }
    });
    return () => {
      unsubscribe();
      unsubscribeMax();
    };
  }, [_id, isNode, nodeId]);

  useEffect(() => {
    setTimestampsHumidity([]);
    setHumidityHistory([]);
    const date = moment().startOf("day").valueOf() / 1000;
    const now = new Date().toLocaleTimeString();
    const urlHumidy = !isNode
      ? `/${_id}/${nodeId ? nodeId[0] : ""}/dailyHumidy/${date}/highestHumidy`
      : `/${_id}/${isNode}/dailyHumidy/${date}/highestHumidy`;

    const dataRef = ref(database, urlHumidy);
    let maxHumidy = 0;
    const urlMaxHumidy = !isNode
      ? `/${_id}/${nodeId ? nodeId[0] : ""}/dailyHumidy/${date}/maxHumidy`
      : `/${_id}/${isNode}/dailyHumidy/${date}/maxHumidy`;
    const dataRefMax = ref(database, urlMaxHumidy);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const currentValue = snapshot.val();
      if (currentValue > maxHumidy) {
        maxHumidy = currentValue;
        set(dataRefMax, maxHumidy);
      }
      setTimestampsHumidity((prev) => {
        const newTimestamps = [...prev, now];
        return newTimestamps.length >= 10
          ? newTimestamps.slice(1)
          : newTimestamps;
      });

      setHumidityHistory((prev) => {
        const newHistory = [...prev, snapshot.val()];
        return newHistory.length >= 10 ? newHistory.slice(1) : newHistory;
      });
    });
    const unsubscribeMax = onValue(dataRefMax, (snapshot) => {
      if (snapshot.exists()) {
        setHighestHumidy(snapshot.val());
      }
    });
    return () => {
      unsubscribe();
      unsubscribeMax();
    };
  }, [_id, isNode, nodeId]);

  useEffect(() => {
    setTimestampsLight([]);
    setLightHistory([]);
    const date = moment().startOf("day").valueOf() / 1000;
    const now = new Date().toLocaleTimeString();
    const urlHumidy = !isNode
      ? `/${_id}/${nodeId ? nodeId[0] : ""}/dailyLight/${date}/highestLight`
      : `/${_id}/${isNode}/dailyLight/${date}/highestLight`;

    const dataRef = ref(database, urlHumidy);
    let maxLight = 0;
    const urlMaxLight = !isNode
      ? `/${_id}/${nodeId ? nodeId[0] : ""}/dailyLight/${date}/maxLight`
      : `/${_id}/${isNode}/dailyLight/${date}/maxLight`;
    const dataRefMaxLight = ref(database, urlMaxLight);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const currentValue = snapshot.val();
      if (currentValue > maxLight) {
        maxLight = currentValue;
        set(dataRefMaxLight, maxLight);
      }
      setTimestampsLight((prev) => {
        const newTimestamps = [...prev, now];
        return newTimestamps.length >= 10
          ? newTimestamps.slice(1)
          : newTimestamps;
      });

      setLightHistory((prev) => {
        const newHistory = [...prev, snapshot.val()];
        return newHistory.length >= 10 ? newHistory.slice(1) : newHistory;
      });
    });
    const unsubscribeMax = onValue(dataRefMaxLight, (snapshot) => {
      if (snapshot.exists()) {
        setHighestLight(snapshot.val());
      }
    });
    return () => {
      unsubscribe();
      unsubscribeMax();
    };
  }, [_id, isNode, nodeId]);
  return (
    <div className="w-full space-y-12 flex flex-col justify-center items-center ">
      <div className="w-[80%] flex justify-end">
        <Select
          value={isNode}
          onValueChange={(value) => {
            setNode(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a node" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {nodeId?.map((item, index) => (
                <SelectItem value={item} key={index}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-[80%]  justify-around">
        <LineChartComponent
          highestValue={highestTemperature}
          title={"Nhiệt độ trung bình"}
          dataX={timestampsTemperature}
          dataY={temperatureHistory}
        />
        <LineChartComponent
          highestValue={highestHumidy}
          title={"Độ ẩm trung bình"}
          dataX={timestampsHumidity}
          dataY={humidityHistory}
        />
        <LineChartComponent
          highestValue={highestLight}
          title={"Ánh sáng trung bình"}
          dataX={timestampsLight}
          dataY={lightHistory}
        />
      </div>
      <div className="w-[80%]">
        <BarChartComponent />
      </div>
    </div>
  );
}

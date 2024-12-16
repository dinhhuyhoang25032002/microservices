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
import { ref, onValue, set, get } from "firebase/database";
import { LineChartComponent } from "~/components/dashboard/LineChart";
import { BarChartComponent } from "~/components/dashboard/BarChart";
import { database } from "~/configs/firebase.config";
import { useAuthStore } from "~/store/auth/AuthStore";

export default function DashboardParams() {
  const [temperatureHistory, setTemperatureHistory] = useState<string[]>([]);
  const [humidityHistory, setHumidityHistory] = useState<string[]>([]);
  const [lightHistory, setLightHistory] = useState<string[]>([]);
  const [highestTemperature, setHighestTemperature] = useState(0);
  const [highestHumidy, setHighestHumidy] = useState(0);
  const [highestLight, setHighestLight] = useState(0);
  const [timestampsTemperature, setTimestampsTemperature] = useState<string[]>(
    []
  );
  const [timestampsHumidity, setTimestampsHumidity] = useState<string[]>([]);
  const [timestampsLight, setTimestampsLight] = useState<string[]>([]);
  const { user } = useAuthStore();
  const { _id, nodeId, email } = user;
  const [isNode, setNode] = useState(nodeId ? nodeId[0] : "");

  const [timestampList, setTimestampList] = useState<Array<number>>([]);
  const [valueTemperatureOfWeek, setValueTemperatureOfWeek] = useState<
    number[]
  >([]);
  const [valueHumidyOfWeek, setValueHumidyOfWeek] = useState<number[]>([]);
  const [valueLightOfWeek, setValueLightOfWeek] = useState<number[]>([]);
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
    const unsubscribe = onValue(dataRef, async (snapshot) => {
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

      const averageValue = getAverage(temperatureHistory);
      if (averageValue >= 40) {
        await fetch("/contact-mailer/notification", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            value: averageValue,
            nodeId: isNode,
            type: "Nhiệt độ",
          }),
        });
      }
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
    const unsubscribe = onValue(dataRef, async (snapshot) => {
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
      const averageValue = getAverage(humidityHistory);
      if (averageValue >= 60) {
        await fetch("/contact-mailer/notification", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            value: averageValue,
            nodeId: isNode,
            type: "Độ ẩm",
          }),
        });
      }
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
    const unsubscribe = onValue(dataRef, async (snapshot) => {
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

      const averageValue = getAverage(lightHistory);
      if (averageValue >= 60) {
        await fetch("/contact-mailer/notification", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            value: averageValue,
            nodeId: isNode,
            type: "Ánh sáng",
          }),
        });
      }
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

  useEffect(() => {
    const fetchData = async () => {
      const yesterday =
        moment().startOf("day").subtract(1, "day").valueOf() / 1000;
      const listTimestamp = Array.from(
        { length: 7 },
        (_, index) => yesterday - index * 86400
      );
      setTimestampList(listTimestamp);

      const promisesTemperature = listTimestamp.map(async (item) => {
        const urlmaxTemperature = !isNode
          ? `/${_id}/${
              nodeId ? nodeId[0] : ""
            }/dailyTemperature/${item}/maxTemperature`
          : `/${_id}/${isNode}/dailyTemperature/${item}/maxTemperature`;
        const dataRef = ref(database, urlmaxTemperature);
        const snapshot = await get(dataRef);
        return snapshot.exists() ? snapshot.val() : null;
      });
      const promisesHumidy = listTimestamp.map(async (item) => {
        const urlmaxTemperature = !isNode
          ? `/${_id}/${nodeId ? nodeId[0] : ""}/dailyHumidy/${item}/maxHumidy`
          : `/${_id}/${isNode}/dailyHumidy/${item}/maxHumidy`;
        const dataRef = ref(database, urlmaxTemperature);
        const snapshot = await get(dataRef);
        console.log(snapshot.val());

        return snapshot.exists() ? snapshot.val() : null;
      });
      const promisesLight = listTimestamp.map(async (item) => {
        const urlmaxTemperature = !isNode
          ? `/${_id}/${nodeId ? nodeId[0] : ""}/dailyLight/${item}/maxLight`
          : `/${_id}/${isNode}/dailyLight/${item}/maxLight`;
        const dataRef = ref(database, urlmaxTemperature);
        const snapshot = await get(dataRef);
        console.log(snapshot.val());

        return snapshot.exists() ? snapshot.val() : null;
      });
      setValueTemperatureOfWeek(await Promise.all(promisesTemperature));
      setValueHumidyOfWeek(await Promise.all(promisesHumidy));
      setValueLightOfWeek(await Promise.all(promisesLight));
    };

    // Gọi hàm fetchData
    fetchData().catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, [_id, isNode, nodeId]);

  console.log(valueTemperatureOfWeek, valueHumidyOfWeek, valueLightOfWeek);
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
        <BarChartComponent
          dataX={timestampList}
          dataHumidy={valueHumidyOfWeek}
          dataLight={valueLightOfWeek}
          dataTemperature={valueTemperatureOfWeek}
          title={"Biểu đồ dữ liệu các thông số  trong 7 ngày"}
        />
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Light from "~/components/devices/Light";
import SwitchCustom from "~/components/devices/SwitchCustom";
import { PiFanDuotone } from "react-icons/pi";
import { database } from "~/configs/firebase.config";
import { useAuthStore } from "~/store/auth/AuthStore";
import { onValue, ref, set } from "firebase/database";
import moment from "moment";
type ControlDeviceProps = {
  nodeId: string;
  isMode: string;
};
export default function ControlDevice({ nodeId, isMode }: ControlDeviceProps) {
  const { user } = useAuthStore();
  const [isOpenLight, setOpenLight] = useState(false);
  const [isOpenFan, setOpenFan] = useState(false);
  const { _id } = user;
  const [light, setLight] = useState();
  const [fan, setFan] = useState();

  useEffect(() => {
    const refLight = `/${_id}/${nodeId}/light`;
    const dataRef = ref(database, refLight);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      setOpenLight(value === 1);
      setLight(value);
    });

    return () => unsubscribe();
  }, [_id, nodeId, isMode]);

  useEffect(() => {
    const refFan = `/${_id}/${nodeId}/fan`;
    const dataRef = ref(database, refFan);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      setOpenFan(value === 1);
      setFan(value);
    });

    return () => unsubscribe();
  }, [_id, nodeId, isMode]);

  useEffect(() => {
    const date = moment().startOf("day").valueOf() / 1000;
    const urlTemperature = `/${_id}/${nodeId}/dailyTemperature/1733418000/highestTemperature`;
    const dataRef = ref(database, urlTemperature);
    console.log(isMode);

    if (isMode === "handler") {
      return;
    }
    const autoHandle = onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        const refFan = `/${_id}/${nodeId}/fan`;
        const dataRef = ref(database, refFan);
        if (snapshot.val() >= 35) {
          set(dataRef, 1);
          setOpenFan(true);
        } else {
          set(dataRef, 0);
          setOpenFan(false);
        }
      }
    });
    return () => autoHandle();
  }, [nodeId, isMode]);

  useEffect(() => {
    const date = moment().startOf("day").valueOf() / 1000;
    const urlTemperature = `/${_id}/${nodeId}/dailyLight/1733418000/highestLight`;
    const dataRef = ref(database, urlTemperature);
    console.log(isMode);

    if (isMode === "handler") {
      return;
    }
    const autoHandle = onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        const refLight = `/${_id}/${nodeId}/light`;
        const dataRef = ref(database, refLight);
        if (snapshot.val() >= 65) {
          set(dataRef, 0);
          setOpenLight(false);
        } else {
          set(dataRef, 1);
          setOpenLight(true);
        }
      }
    });
    return () => autoHandle();
  }, [nodeId, isMode]);
  
  const handleLightSwitch = async (value: boolean) => {
    const refLight = `/${_id}/${nodeId}/light`;
    const dataRef = ref(database, refLight);
    const firebaseValue = value ? 1 : 0;
    await set(dataRef, firebaseValue); // Update in Firebase
  };

  // Handle switching Fan
  const handleFanSwitch = async (value: boolean) => {
    const refFan = `/${_id}/${nodeId}/fan`;
    const dataRef = ref(database, refFan);
    const firebaseValue = value ? 1 : 0;
    await set(dataRef, firebaseValue); // Update in Firebase
  };

  return (
    <div className="flex flex-col items-center justify-center text-center rounded space-y-5 p-4 border-2 border-gray-700">
      <span className="text-xl font-semibold uppercase">{nodeId}</span>
      <div className="flex gap-5">
        <div className="border-2 border-gray-700 space-y-4 h-fit p-4 rounded">
          <Light led={light} />
          <SwitchCustom
            value={isOpenLight}
            onSwitchChange={handleLightSwitch}
            id={`${nodeId}light`}
          />
        </div>
        <div className="border-2 border-gray-700 space-y-4 h-fit p-4 rounded">
          <div>
            <PiFanDuotone
              className={fan === 1 ? `animate-spin text-7xl` : `text-7xl`}
            />
          </div>
          <SwitchCustom
            id={`${nodeId}fan`}
            onSwitchChange={handleFanSwitch}
            value={isOpenFan}
          />
        </div>
      </div>
    </div>
  );
}

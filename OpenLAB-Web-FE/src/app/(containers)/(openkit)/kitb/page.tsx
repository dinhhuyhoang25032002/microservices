"use client";
import MainLayout from "~/components/main-layout";
import dynamic from "next/dynamic";
import { LazyBannerPage } from "~/utils/LazySection";
import { useState } from "react";
import mqtt from "mqtt";
const LazyMqttConnect = dynamic(
  () => import("~/components/openkit/kitb/MqttConnect"),
  { ssr: false }
);
const LazySchemaKitb = dynamic(
  () => import("~/components/openkit/kitb/schema/SchemaKitb")
);
const LazyDashboard = dynamic(
  () => import("~/components/openkit/kitb/Dashboard"),
  { ssr: false }
);
export default function OpenKitBPage() {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [gas, setGas] = useState(0);
  const [light, setLight] = useState(0);
  const [connectStatus, setConnectStatus] = useState<boolean>(false);
  const [led, setLed] = useState(0);
  const [mqttClient, setMqttClient] = useState<mqtt.MqttClient | null>(null);
  const [mqttTopic, setMqttTopic] = useState("");
  const handleSwitchChange = (id: string, state: boolean) => {
    const message = JSON.stringify({ [id]: state ? 1 : 0 });
    // const message = `{[id]:${state ? 1 : 0}}`;
    if (mqttClient) {
      mqttClient.publish(
        `${mqttTopic}/client`,
        message,
        { qos: 0, retain: false },
        (error: unknown) => {
          console.log(mqttTopic);
          if (error) {
            console.error("Publish error:", error);
          } else {
            console.log("Message published:", message);
          }
        }
      );
    }
  };
  return (
    <MainLayout>
      <div>
        <div className="flex justify-center flex-col">
          <LazyBannerPage
            header={"OpenKit B"}
            homepage={"Home Page"}
            name={"Connect Status:"}
            connectStatus={connectStatus ? "Connected" : "Disconnected"}
          />
          <LazySchemaKitb
            temperature={temperature}
            light={light}
            gas={gas}
            humidity={humidity}
            led={led}
            onSwitchChange={handleSwitchChange}
          />
          <LazyMqttConnect
            setTemperature={setTemperature}
            setHumidity={setHumidity}
            setGas={setGas}
            setLight={setLight}
            setConnectStatus={setConnectStatus}
            setLed={setLed}
            connectStatus={connectStatus}
            setMqttClient={setMqttClient} // Thêm để thiết lập client MQTT
            setMqttTopic={setMqttTopic}
          />
          <LazyDashboard
            temperature={temperature}
            humidity={humidity}
            gas={gas}
            light={light}
          />
        </div>
      </div>
    </MainLayout>
  );
}

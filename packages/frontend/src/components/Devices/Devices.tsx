import Device from "./Device/Device";
import "./Devices.css"
import { useState } from "React";

const DeviceContainers = [
  {}
]

export default function Devices() {
  const [selectedRole, setSelectedRole] = useState<string>("")

  return (
    <div className="flex flex-col flex-grow ml-[114px] px-4 pt-3">
      <div className="font-semibold bg-clip-text font-cutive text-center 
      bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-5xl 
      text-transparent mb-4">
        Devices
      </div>
      <div className="flex flex-row flex-wrap">
        <Device />
        <Device />
        <Device />
      </div>
    </div>
  )
}
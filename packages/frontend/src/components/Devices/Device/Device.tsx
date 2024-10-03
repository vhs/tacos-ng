import React, { FC, useState } from 'react';
import DeviceDescription from "./DeviceDescription/DeviceDescription";
import DeviceRoles from "./DeviceRoles/DeviceRoles";

const Device: FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("")

  return (
    <div className="bg-gray-400 max-w-[265px] h-[268px] rounded-xl px-4 pb-4 pt-2 m-3">
      <div className="text-2xl font-semibold font-cutive">
        Lazer Cutter
      </div>
      <DeviceDescription />
      <DeviceRoles
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole} />
      <div className="flex justify-between">
        <span className="font-cutive font-semibold">State:</span>
        <span className="font-cutive">Unarmed</span>
      </div>
      <div className="flex justify-between">
        <span className="font-cutive font-semibold">Last Seen:</span>
        <span className="font-cutive">2 Years Ago</span>
      </div>
      <div className="flex justify-between">
        <button className="bg-red-500 px-2 py-1 font-cutive font-semibold
                            rounded-[4px]">
          Delete
        </button >
        <button className="bg-cyan-500 px-2 py-1 font-cutive font-semibold
                            rounded-[4px]">
          Arm
        </button>
      </div>
    </div>
  )
}

export default Device;

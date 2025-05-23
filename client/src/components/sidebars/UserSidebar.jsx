import React from "react"
import { UserInformation } from "../user"
import { userSidebar } from "~/utilities/constant"
import { NavLink } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import clsx from "clsx"

const UserSidebar = ({ setIsShowMenu }) => {
  return (
    <div className="flex flex-col bg-[#007370] text-white h-full justify-between">
      <div className="flex flex-col">
        <UserInformation />
        <div
          onClick={() => setIsShowMenu && setIsShowMenu(false)}
          className="mt-6"
        >
          {userSidebar.map((el) => (
            <NavLink
              className={({ isActive }) =>
                twMerge(
                  clsx(
                    "px-4 py-4 flex items-center gap-2 hover:text-orange-500",
                    isActive && "bg-[#00655f] border-r-4 border-orange-600"
                  )
                )
              }
              to={el.path}
              key={el.id}
            >
              {el.icon}
              <span>{el.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserSidebar

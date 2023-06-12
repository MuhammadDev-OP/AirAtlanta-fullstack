"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "../Avatar";
export const UserMenu = () => {
  return (
    <div className="relative">
      <div
        className="
            items-center
            flex
            flex-row gap-3"
      >
        <div
          onClick={() => {}}
          className="
            py-3
            px-4
            font-semibold
            text-sm
            rounded-full
            hover:bg-neutral-100
            cursor-pointer
            transition"
        >
          airAtlanta Your Home
        </div>
        <div className="
        flex
        flex-row
        py-2
        px-2
        cursor-pointer
        gap-3
        border-[1px]
        border-neutral-200
        rounded-full
        items-center
        ">
            <AiOutlineMenu />
            <Avatar />
        </div>
      </div>
    </div>
  );
};

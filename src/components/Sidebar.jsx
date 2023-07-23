"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import Back from "./Back";
import RadioInput from "./RadioInput";

const sortItem = [
  { id: 1, label: "Highest", value: "highest" },
  { id: 2, label: "Lowest", value: "lowest" },
];

const Sidebar = ({ open, setOpen }) => {
  const [sort, setSort] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const sortHandler = (e) => {
    const value = e.target.value;
    setSort(value);
  };

  return (
    <>
      <Back open={open} setOpen={setOpen} />
      <aside
        className={`${open ? "top-0 duration-300" : "-top-52 duration-300"}
          fixed left-0 w-52 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50 h-screen z-50  py-3 px-1`}
      >
        <h3 className="flex items-center justify-between font-semibold mb-3">Filter By:</h3>
        <div className="space-y-3">
          {sortItem.map((i) => (
            <RadioInput
              key={i.id}
              id={i.id}
              value={i.value}
              name={"sort-item"}
              onChange={sortHandler}
              label={i.label}
              checked={sort === i.value}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import Back from './../../components/Back';
import RadioInput from './../../components/RadioInput';

const sortItem = [
  { id: 1, label: "Newest", value: "asc" },
  { id: 2, label: "Oldest", value: "desc" },
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

  const changeSortHandler = (e) => {
    const value = e.target.value;
    setSort(value);
    router.push(pathname + "?" + createQueryString("sort", value));
  };

  return (
    <>
      <Back open={open} setOpen={setOpen} />
      <aside
        className={`${open ? "top-0 duration-300" : "-top-52 duration-300"}
          fixed left-0 w-52 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50 h-screen z-50  py-3 px-1`}
      >
        <h3 className="flex items-center justify-between font-semibold mb-3">
          Filter By:
        </h3>
        <div className="space-y-3">
          <div className="space-y-3">
            {sortItem.map((i) => (
              <RadioInput
                key={i.id}
                id={i.id}
                value={i.value}
                name={"sort-item"}
                label={i.label}
                checked={sort === i.value}
                onChange={changeSortHandler}
              />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

"use clinet";
import RadioInput from "@/components/RadioInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const sortItem = [
  { id: 1, label: "Newest", value: "asc" },
  { id: 2, label: "Oldest", value: "desc" },
];
const FilterBySort = () => {
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
      <h3 className="flex items-center justify-between font-semibold mb-3">
        Sort:
      </h3>
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
    </>
  );
};

export default FilterBySort;

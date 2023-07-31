"use client";
import Back from "@/components/Back";
import FilterBySort from "./FilterbysortItem";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      <Back open={open} setOpen={setOpen} />
      <aside
        className={`${open ? "top-0" : "-top-52"}
          fixed left-0 w-52 bg-slate-50 text-slate-950  h-screen z-50  py-3 px-1 transition-all duration-300`}
      >
        <div className="space-y-3">
          <FilterBySort />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

import { Table, flexRender } from "@tanstack/react-table";
import clsx from "clsx";

export interface TableHeadProps {
  table?: Table<any> | null;
}

export const TableHead = ({ table = null }: TableHeadProps) => {
  return (
    <thead>
      {table !== null &&
        table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className={clsx("w-full")}>
            {headerGroup.headers.map((header) => {
              return (
                <th key={header.id} colSpan={header.colSpan}>
                  <div
                    className={clsx(
                      "w-full",
                      "cursor-pointer select-none flex justify-center items-center"
                    )}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        ))}
    </thead>
  );
};

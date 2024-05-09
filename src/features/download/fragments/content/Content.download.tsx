import * as React from "react";
import clsx from "clsx";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
import Section from "@/core/ui/components/section/Section.component";
import Breadcrumb from "@/core/ui/components/breadcrumb/Breadcrumb.component";
import { useDownloadDictionaries } from "../../zustand/dictionaries/store";
import { TableHead } from "@/core/ui/components/table_head";
import { TableBody } from "@/core/ui/components/table_body";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Link, useNavigate } from "react-router-dom";

export interface ContentDownloadProps {}

export default function ContentDownload(_: ContentDownloadProps) {
  const dict = useDownloadDictionaries().dict;
  const navigate = useNavigate();
  const driverColumns = React.useMemo<
    ColumnDef<{ [key: string]: string }>[]
  >(() => {
    return dict.download.drivers.columns.map((item) => {
      return {
        accessorKey: item.id,
        header: () => {
          if (item.id === "link") {
            return (
              <div
                className={clsx(
                  "w-full",
                  "px-[0.5rem] py-[0.5rem]",
                  "bg-[#506A99]"
                )}
              >
                <p
                  className={clsx(
                    "text-[0.75rem] md:text-[1rem] text-[#506A99] font-bold"
                  )}
                >
                  {item.label}
                </p>
              </div>
            );
          }
          return (
            <div
              className={clsx(
                "w-full",
                "px-[0.5rem] py-[0.5rem]",
                "bg-[#506A99]"
              )}
            >
              <p
                className={clsx(
                  "text-[0.75rem] md:text-[1rem] text-white font-bold"
                )}
              >
                {item.label}
              </p>
            </div>
          );
        },
        cell: (cellProps) => {
          if (item.id === "link") {
            if (!(cellProps.row.getValue(item.id) as string).length) {
              return (
                <div
                  className={clsx(
                    "grid grid-cols-1 place-content-center place-items-center",
                    "w-full h-full"
                  )}
                >
                  <p
                    className={clsx(
                      "text-[0.75rem] md:text-[1rem] text-eerie-black font-normal",
                      "break-words"
                    )}
                  >
                    {"Driver-free"}
                  </p>
                </div>
              );
            }
            const link = (cellProps.row.getValue(item.id) as string).replace(
              "{{domain}}",
              process.env.NEXT_PUBLIC_SITE_URL ?? ""
            );
            return (
              <div
                className={clsx(
                  "grid grid-cols-1 place-content-center place-items-center",
                  "w-full h-full"
                )}
              >
                <Link
                  to={link}
                  target={"_blank"}
                  className={clsx(
                    "text-[0.75rem] md:text-[1rem] text-[blue] font-normal",
                    "break-words",
                    "underline"
                  )}
                  download
                >
                  {"Download"}
                </Link>
              </div>
            );
          }

          if (item.id === "compatibility") {
            return (
              <div
                className={clsx(
                  "grid grid-cols-1 place-content-center place-items-center",
                  "w-full h-full"
                )}
              >
                {(cellProps.row.getValue(item.id) as string)
                  .split(",")
                  .map((item, index) => (
                    <p
                      key={index}
                      className={clsx(
                        "text-[0.75rem] md:text-[1rem] text-eerie-black font-medium",
                        "break-words"
                      )}
                    >
                      {item}
                    </p>
                  ))}
              </div>
            );
          }
          return (
            <div
              className={clsx(
                "grid grid-cols-1 place-content-center place-items-center",
                "w-full h-full"
              )}
            >
              <p
                className={clsx(
                  "text-[0.75rem] md:text-[1rem] text-eerie-black font-medium",
                  "break-words"
                )}
              >
                {cellProps.row.getValue(item.id)}
              </p>
            </div>
          );
        },
      };
    });
  }, [dict.download.drivers.columns]);

  const driverTable = useReactTable({
    data: dict.download.drivers.data,
    columns: driverColumns,
    state: {
      pagination: {
        pageIndex: 0,
        pageSize: 20,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    paginateExpandedRows: false,
    autoResetPageIndex: false,
    debugTable: true,
  });

  const documentColumns = React.useMemo<
    ColumnDef<{ [key: string]: string | Date }>[]
  >(() => {
    return dict.download.documents.columns.map((item) => {
      return {
        accessorKey: item.id,
        header: () => {
          if (item.id === "link") {
            return (
              <div
                className={clsx(
                  "w-full",
                  "px-[0.5rem] py-[0.5rem]",
                  "bg-[#506A99]"
                )}
              >
                <p
                  className={clsx(
                    "text-[0.75rem] md:text-[1rem] text-[#506A99] font-bold"
                  )}
                >
                  {item.label}
                </p>
              </div>
            );
          }
          return (
            <div
              className={clsx(
                "w-full",
                "px-[0.5rem] py-[0.5rem]",
                "bg-[#506A99]"
              )}
            >
              <p
                className={clsx(
                  "text-[0.75rem] md:text-[1rem] text-white font-bold"
                )}
              >
                {item.label}
              </p>
            </div>
          );
        },
        cell: (cellProps) => {
          if (item.id === "link") {
            const link = (cellProps.row.getValue(item.id) as string).replace(
              "{{domain}}",
              process.env.NEXT_PUBLIC_SITE_URL ?? ""
            );
            return (
              <div
                className={clsx(
                  "grid grid-cols-1 place-content-center place-items-center",
                  "w-full h-full"
                )}
              >
                <Link
                  to={link}
                  target={"_blank"}
                  className={clsx(
                    "text-[0.75rem] md:text-[1rem] text-[blue] font-normal",
                    "break-words",
                    "underline"
                  )}
                  download
                >
                  {"Download"}
                </Link>
              </div>
            );
          }
          if (item.id === "document") {
            return (
              <div
                className={clsx(
                  "grid grid-cols-1 items-center content-center justify-start justify-items-start",
                  "w-full h-full",
                  "px-[0.5rem] py-[0.5rem]",
                  "mr-[9rem]"
                )}
              >
                <p
                  className={clsx(
                    "text-[0.75rem] md:text-[1rem] text-eerie-black font-medium",
                    "break-words"
                  )}
                >
                  {cellProps.row.getValue(item.id)}
                </p>
              </div>
            );
          }
          return (
            <div
              className={clsx(
                "grid grid-cols-1 place-content-center place-items-center",
                "w-full h-full",
                "px-[0.5rem] py-[0.5rem]"
              )}
            >
              <p
                className={clsx(
                  "text-[0.75rem] md:text-[1rem] text-eerie-black font-medium",
                  "break-words"
                )}
              >
                {cellProps.row.getValue(item.id)}
              </p>
            </div>
          );
        },
      };
    });
  }, [dict.download.drivers.columns]);

  const documentTable = useReactTable({
    data: dict.download.documents.data,
    columns: documentColumns,
    state: {
      pagination: {
        pageIndex: 0,
        pageSize: 20,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    paginateExpandedRows: false,
    autoResetPageIndex: false,
    debugTable: true,
  });

  const handleClickBreadcrumb = (value: string) => {
    navigate(value);
  };

  return (
    <div id={"meet-our-teams"} className={clsx("w-full")}>
      <Section>
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
              "w-full",
              "py-[2rem] md:py-[2rem]"
            )}
          >
            <Breadcrumb
              list={dict.breadcrumb}
              onClick={handleClickBreadcrumb}
            />

            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full"
              )}
            >
              <h2
                className={clsx(
                  "text-[2.5rem] md:text-[3rem] leading-[3.375rem] md:leading-[4rem] text-eerie-black font-semibold"
                )}
              >
                {dict.download.headline}
              </h2>
            </div>

            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[0.75rem]",
                "w-full"
              )}
            >
              {/* list driver */}
              <div
                className={clsx(
                  "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
                  "w-full",
                  "rounded-[0.25rem]",
                  "overflow-hidden"
                )}
              >
                <table className={clsx("wide-spacing", "w-full")}>
                  <TableHead table={driverTable} />
                  <TableBody table={driverTable} />
                </table>
              </div>

              <p
                className={clsx(
                  "text-[0.75rem] leading-[1rem] md:text-[0.875rem] md:leading-[1.25rem] font-semibold text-eerie-black"
                )}
              >
                {dict.download.notes.drivers}
              </p>
            </div>

            {/* list document */}
            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
                "w-full",
                "rounded-[0.25rem]",
                "overflow-hidden"
              )}
            >
              <table className={clsx("wide-spacing", "w-full")}>
                <TableHead table={documentTable} />
                <TableBody table={documentTable} />
              </table>
            </div>
          </div>
        </ContentSection>
      </Section>
    </div>
  );
}

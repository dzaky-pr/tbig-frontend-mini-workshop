import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/primitive/button";
import { Checkbox } from "@/components/primitive/checkbox";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

/**
 * @type {import("@tanstack/react-table").ColumnDef<any>[]}
 */
export const columns = [
  {
    id: "select",
    size: 10,
    header: ({ table }) => (
      <div className="grid h-full place-items-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="grid h-full w-full place-items-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
  },
  {
    accessorKey: "title",
    size: 100,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          {column.getIsSorted() === "asc" && (
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
          {column.getIsSorted() === "desc" && (
            <ArrowUp className="ml-2 h-4 w-4" />
          )}
          {typeof column.getIsSorted() !== "string" && (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex w-52 flex-row items-center gap-4 text-wrap text-base font-semibold">
          <Image
            src={
              "https://i.pinimg.com/originals/a1/f8/87/a1f88733921c820db477d054fe96afbb.jpg"
            }
            alt="Book cover image"
            width={64}
            height={96}
          />
          <span>{row.getValue("title")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "synopsis",
    size: 300,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Synopsis
          {column.getIsSorted() === "asc" && (
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
          {column.getIsSorted() === "desc" && (
            <ArrowUp className="ml-2 h-4 w-4" />
          )}
          {typeof column.getIsSorted() !== "string" && (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      );
    },
    cell: ({ row }) => {
      const synopsis = row.getValue("synopsis");
      const short = synopsis.slice(0, 100) + "....";
      return <p className="text-wrap">{short}</p>;
    },
  },
  {
    accessorKey: "author",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Author
          {column.getIsSorted() === "asc" && (
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
          {column.getIsSorted() === "desc" && (
            <ArrowUp className="ml-2 h-4 w-4" />
          )}
          {typeof column.getIsSorted() !== "string" && (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      );
    },
  },
  {
    id: "actions",
    header: () => "Actions",
    cell: ({ row }) => {
      return (
        <div className="space-x-2">
          <Link href={`/book/edit/${row.original?.id}`}>
            <Button variant="secondary">Edit</Button>
          </Link>
          <Button variant="destructive">Delete</Button>
        </div>
      );
    },
  },
];

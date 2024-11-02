import Link from "next/link";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/primitive/button";
import { Checkbox } from "@/components/primitive/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/primitive/alert-dialog";

/**
 * @type {import("@tanstack/react-table").ColumnDef<any>[]}
 */
export const columns = [
  {
    accessorKey: "select",
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
  },
  {
    accessorKey: "sysnopsis",
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
      const synopsis = row.getValue("sysnopsis");
      const short =
        synopsis.length > 100 ? synopsis.slice(0, 100) + "...." : synopsis;
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
    cell: ({ row, table }) => {
      return (
        <div className="flex flex-row flex-wrap gap-2">
          <Link href={`/book/edit/${row.original?.id}`}>
            <Button variant="secondary">Edit</Button>
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild={true}>
              <Button variant="destructive">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently{" "}
                  <span className="font-semibold uppercase text-destructive">
                    delete {row.getValue("title")}
                  </span>{" "}
                  book.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() =>
                    table.options.meta?.fn.deleteBook(
                      row.original?.id,
                      row.original?.title,
                    )
                  }
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];

import {
    flexRender,
    Table as reactTable,
    ColumnDef,
    Cell,
    Row,
    HeaderGroup,
    Header
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Post } from "@/model/post";

interface DataTableProps<TData, TValue = unknown> {
    table: reactTable<TData>
    columns: ColumnDef<TData, TValue>[]
    setPostDetail: (value: any) => void    
    setIsOpen?: (value: boolean) => void    

}

const DataTable = <TData, TValue>({ table, columns, setPostDetail, setIsOpen }: DataTableProps<TData, TValue>) => {

    return (
        <div className="self-stretch h-[600px] rounded-lg border border-zinc-200 flex-col justify-start items-start flex">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup: HeaderGroup<TData>) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header: Header<TData, unknown>) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {
                        table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row: Row<TData>) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    onClick={() => {                                                                                
                                        setPostDetail && setPostDetail({
                                            ...row.original
                                        } as Post | null),
                                            setIsOpen && setIsOpen(true);
                                    }}
                                >
                                    {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
                                        <TableCell key={cell.id}>
                                            {
                                                flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )

                                            }
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                </TableBody>
            </Table>
        </div >
    )
}

export default DataTable;
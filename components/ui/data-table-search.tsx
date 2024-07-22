import {
    Table,
    Column
} from "@tanstack/react-table";

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import DebouncedInput from "@/components/ui/debounced-input";
import { ChevronDown } from "lucide-react"

interface DataTableSearchProps<TData> {
    table: Table<any>;
    globalFilter: string;
    setGlobalFilter: (filter: string) => void;
}

const DataTableSearch = <TData extends {}>({ table, globalFilter, setGlobalFilter }: DataTableSearchProps<TData>) => {
    return (
        <div className="justify-start items-center gap-2 flex">
            <div className="justify-start items-center gap-1.5 flex">
                <div className="bg-white flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                            <div className="w-[455px] pl-3 pr-14 rounded-md border border-zinc-200 justify-start items-center gap-3 inline-flex">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="ml-auto">
                                            View <ChevronDown className="ml-2 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        {
                                            table
                                                .getAllColumns()
                                                .filter((column: Column<TData>) => column.getCanHide())
                                                .map((column: Column<TData>) => {
                                                    return (
                                                        <DropdownMenuCheckboxItem
                                                            key={column.id}
                                                            className="capitalize"
                                                            checked={column.getIsVisible()}
                                                            onCheckedChange={(value) =>
                                                                column.toggleVisibility(!!value)
                                                            }
                                                        >
                                                            {column.id}
                                                        </DropdownMenuCheckboxItem>
                                                    )
                                                })}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <DebouncedInput
                                    value={globalFilter ?? ''}
                                    onChange={(value: string | number) => setGlobalFilter(String(value))}
                                    className="p-2 font-lg shadow border border-block"
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataTableSearch;
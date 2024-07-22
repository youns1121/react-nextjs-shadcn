import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const Detail = () => {

    return (
        <div className="flex w-full flex-col gap-6">
            <Card
                className="overflow-hidden w-[1000px] h-[800px] self-center"
                x-chunk="dashboard-05-chunk-4"
            >
                <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg">
                            Order Oe31b70H
                            <Button
                                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                                size="icon"
                                variant="outline"
                            >
                                <span className="sr-only">
                                    Copy Order ID
                                </span>
                            </Button>
                        </CardTitle>
                        <CardDescription>
                            Date: November 23, 2023
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                    <div className="grid gap-3">
                        <div className="font-semibold">
                            Order Details
                        </div>
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Glimmer Lamps x{' '}
                                    <span>
                                        2
                                    </span>
                                </span>
                                <span>
                                    $250.00
                                </span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Aqua Filters x{' '}
                                    <span>
                                        1
                                    </span>
                                </span>
                                <span>
                                    $49.00
                                </span>
                            </li>
                        </ul>
                        <Separator className="my-2" />
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Subtotal
                                </span>
                                <span>
                                    $299.00
                                </span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Shipping
                                </span>
                                <span>
                                    $5.00
                                </span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Tax
                                </span>
                                <span>
                                    $25.00
                                </span>
                            </li>
                            <li className="flex items-center justify-between font-semibold">
                                <span className="text-muted-foreground">
                                    Total
                                </span>
                                <span>
                                    $329.00
                                </span>
                            </li>
                        </ul>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                            <div className="font-semibold">
                                Shipping Information
                            </div>
                            <address className="grid gap-0.5 not-italic text-muted-foreground">
                                <span>
                                    Liam Johnson
                                </span>
                                <span>
                                    1234 Main St.
                                </span>
                                <span>
                                    Anytown, CA 12345
                                </span>
                            </address>
                        </div>
                        <div className="grid auto-rows-max gap-3">
                            <div className="font-semibold">
                                Billing Information
                            </div>
                            <div className="text-muted-foreground">
                                Same as shipping address
                            </div>
                        </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid gap-3">
                        <div className="font-semibold">
                            Customer Information
                        </div>
                        <dl className="grid gap-3">
                            <div className="flex items-center justify-between">
                                <dt className="text-muted-foreground">
                                    Customer
                                </dt>
                                <dd>
                                    Liam Johnson
                                </dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-muted-foreground">
                                    Email
                                </dt>
                                <dd>
                                    <a>
                                        liam@acme.com
                                    </a>
                                </dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-muted-foreground">
                                    Phone
                                </dt>
                                <dd>
                                    <a>
                                        +1 234 567 890
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid gap-3">
                        <div className="font-semibold">
                            Payment Information
                        </div>
                        <dl className="grid gap-3">
                            <div className="flex items-center justify-between">
                                <dt className="flex items-center gap-1 text-muted-foreground">
                                    Visa
                                </dt>
                                <dd>
                                    **** **** **** 4532
                                </dd>
                            </div>
                        </dl>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                    <div className="text-xs text-muted-foreground">
                        Updated{' '}
                        <time dateTime="2023-11-23">
                            November 23, 2023
                        </time>
                    </div>
                    <Pagination className="ml-auto mr-0 w-auto">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </CardFooter>
            </Card>
        </div>
    )
}


export default Detail;

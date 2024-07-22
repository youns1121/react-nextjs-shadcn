import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Accordion,
} from "@/components/ui/accordion"

import { Badge } from "@/components/ui/badge"

export default function Test() {
    return (
        <main>
            <section className="w-[1920px] h-[2485px] flex-col justify-start items-start gap-[19px] inline-flex">
                <article className="self-stretch bg-white rounded-lg border border-slate-200 justify-start items-start inline-flex">
                    <article className="grow shrink basis-0 bg-gray-50 rounded-lg shadow flex-col justify-start items-start inline-flex">
                        <h1 className="text-zinc-950 text-2xl font-semibold font-['Inter'] leading-normal">File Delivery (Express) Order Details</h1>
                        <article className="self-stretch h-[2292px] px-8 pb-8 flex-col justify-start items-start gap-4 flex">
                            <Card className="self-stretch h-[893px] bg-white rounded-lg shadow border border-zinc-200 flex-col justify-start items-start flex">
                                <article className="self-stretch p-6 border-b border-zinc-200 justify-between items-center inline-flex">
                                    <Accordion type="single" className="text-zinc-950 text-base font-medium font-['Inter'] leading-none">
                                        Order Information
                                    </Accordion>
                                    <article className="w-4 h-4 relative" />
                                </article>
                                <CardContent className="self-stretch h-[829px] p-6 flex-col justify-start items-start gap-4 flex">
                                    <article className="self-stretch h-[795px] bg-white rounded-lg shadow border border-zinc-200 flex-col justify-start items-start flex">
                                        <CardHeader className="self-stretch p-6 bg-slate-100/opacity-50 flex-col justify-start items-start gap-1.5 inline-flex">
                                            <CardTitle>Order 0e31b70H</CardTitle>
                                            <CardDescription>Date: November 23, 2023</CardDescription>
                                            <CardDescription>JY KIM (jykim@ncomz.com)</CardDescription>
                                            <article className="self-stretch justify-end items-start gap-8 inline-flex">
                                                <article className="flex-col justify-start items-start gap-0.5 inline-flex">
                                                    <p className="text-zinc-500 text-sm font-normal font-['Inter']">UEs</p>
                                                    <p className="text-zinc-950 text-sm font-normal font-['Inter']">1,111</p>
                                                </article>
                                                <article className="flex-col justify-start items-start gap-0.5 inline-flex">
                                                    <p className="text-zinc-500 text-sm font-normal font-['Inter']">Broadcast volume</p>
                                                    <p className="text-zinc-950 text-sm font-normal font-['Inter']">1000 MB</p>
                                                </article>
                                                <article className="flex-col justify-start items-start gap-0.5 inline-flex">
                                                    <p className="text-zinc-500 text-sm font-normal font-['Inter']">Broadband volume</p>
                                                    <p className="text-zinc-950 text-sm font-normal font-['Inter']">1000 MB</p>
                                                </article>
                                            </article>
                                        </CardHeader>

                                        <CardContent className="self-stretch">
                                            <article className="self-stretch h-[312px] flex-col justify-start items-start gap-4 flex">
                                                <article className="self-stretch justify-start items-start gap-4 inline-flex">
                                                    <article className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                                        <p className="self-stretch text-zinc-950 text-sm font-semibold font-['Inter'] leading-tight">Order ID</p>
                                                        <article className="flex-col justify-start items-start gap-0.5 flex">
                                                            <p className="text-zinc-950 text-sm font-normal font-['Inter']">2024-001287-00117</p>
                                                        </article>
                                                    </article>
                                                    <article className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                                        <p className="text-zinc-950 text-sm font-semibold font-['Inter'] leading-tight">Order Status</p>
                                                        <Badge className="px-2.5 py-0.5 bg-zinc-900 rounded-full border border-slate-200/opacity-0 justify-center items-center gap-2.5 inline-flex">
                                                            <p className="text-white text-xs font-semibold font-['Inter'] leading-none">Submitted</p>
                                                        </Badge>
                                                    </article>
                                                </article>
                                                <article className="self-stretch justify-start items-start gap-4 inline-flex">
                                                    <article className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                                        <p className="self-stretch text-zinc-950 text-sm font-semibold font-['Inter'] leading-tight">Customer</p>
                                                        <article className="flex-col justify-start items-start gap-0.5 flex">
                                                            <p className="text-zinc-950 text-sm font-normal font-['Inter']">hide on push</p>
                                                        </article>
                                                    </article>
                                                    <article className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                                        <p className="text-zinc-950 text-sm font-semibold font-['Inter'] leading-tight">UE Type</p>
                                                        <p className="text-zinc-950 text-sm font-normal font-['Inter']">Mobile</p>
                                                    </article>
                                                </article>
                                                <article className="self-stretch justify-start items-start gap-4 inline-flex">
                                                    <article className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                                        <article className="self-stretch text-zinc-950 text-sm font-semibold font-['Inter'] leading-tight">Estimated No</article>
                                                        <article className="flex-col justify-start items-start gap-0.5 flex">
                                                            <article className="text-zinc-950 text-sm font-normal font-['Inter']">-</article>
                                                        </article>
                                                    </article>
                                                    <article className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                                        <article className="flex items-center space-x-2">
                                                            <Checkbox id="terms" className="w-4 h-4 rounded border border-zinc-900" />
                                                            <Label htmlFor="terms" className="text-zinc-950 text-sm font-semibold font-['Inter'] leading-tight">Requires Customer Approval</Label>
                                                        </article>
                                                    </article>
                                                </article>
                                                <article className="self-stretch justify-start items-start gap-4 inline-flex">
                                                    <article className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                                        <article className="self-stretch text-zinc-950 text-sm font-semibold font-['Inter'] leading-tight">Delivery Bitrate</article>
                                                        <article className="flex-col justify-start items-start gap-0.5 flex">
                                                            <article className="text-zinc-950 text-sm font-normal font-['Inter']">-</article>
                                                        </article>
                                                    </article>
                                                    <article className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                                        <article className="text-zinc-950 text-sm font-semibold font-['Inter'] leading-tight">App Context ID</article>
                                                        <article className="text-zinc-950 text-sm font-normal font-['Inter']">contextid1234</article>
                                                    </article>
                                                </article>
                                                <article className="self-stretch justify-start items-start gap-4 inline-flex">
                                                    <article className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                                        <article className="self-stretch text-zinc-950 text-sm font-semibold font-['Inter'] leading-tight">Filter Codes</article>
                                                        <article className="flex-col justify-start items-start gap-0.5 flex">
                                                            <article className="text-zinc-950 text-sm font-normal font-['Inter']">-</article>
                                                        </article>
                                                    </article>
                                                </article>
                                            </article>
                                            <br />
                                            {/* <Separator /> */}
                                            {/* <article className="self-stretch h-[33px] py-4 flex-col justify-start items-start flex">
                                                <article className="self-stretch bg-zinc-200" />
                                            </article> */}

                                            <section className="self-stretch h-[228px] flex-col justify-start items-start gap-3 flex">
                                                <article className="self-stretch justify-start items-center gap-1.5 inline-flex">
                                                    <h1 className="icon-caution text-light-blue">Schedules</h1>
                                                    <p className="text-zinc-500 text-sm font-normal font-['Inter'] leading-normal">2</p>
                                                </article>
                                                <article className="justify-start items-center gap-1.5 inline-flex">
                                                    <p>Time Zone</p>
                                                    <Badge className="px-2.5 py-0.5 rounded-full border border-zinc-200 justify-center items-center gap-2.5 flex">
                                                        Local
                                                    </Badge>
                                                </article>

                                                <article className="self-stretch h-40 flex-col justify-start items-start gap-4 flex">
                                                    <Table>
                                                        <TableHeader>
                                                            <TableRow>
                                                                <TableHead className="w-[100px]">Sequence</TableHead>
                                                                <TableHead>Time</TableHead>
                                                                <TableHead>Repeats</TableHead>
                                                                <TableHead>Recurrence Pattern</TableHead>
                                                                <TableHead>Range of Recurrence</TableHead>
                                                                <TableHead>Flexible Sessions</TableHead>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell className="font-medium">1</TableCell>
                                                                <TableCell>Anytime</TableCell>
                                                                <TableCell>As many time as possible</TableCell>
                                                                <TableCell>Occurs every 3 days</TableCell>
                                                                <TableCell>05/28/24 - No end date</TableCell>
                                                                <TableCell className="w-[148px] h-[52px] p-4 justify-center items-center gap-2.5 inline-flex">
                                                                    <Checkbox id="terms" className="w-4 h-4 rounded border border-zinc-900" />
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="font-medium">2</TableCell>
                                                                <TableCell>Anytime</TableCell>
                                                                <TableCell>As many time as possible</TableCell>
                                                                <TableCell>Occurs every 3 days</TableCell>
                                                                <TableCell>05/28/24 - No end date</TableCell>
                                                                <TableCell className="w-[148px] h-[52px] p-4 justify-center items-center gap-2.5 inline-flex">
                                                                    <Checkbox id="terms" className="w-4 h-4 rounded border border-zinc-900" />
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </article>
                                            </section>
                                        </CardContent>
                                    </article>
                                </CardContent>
                            </Card>
                            <article className="self-stretch justify-start items-start gap-4 inline-flex">
                                <article className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                    <article className="self-stretch justify-start items-start gap-4 inline-flex">
                                        <Card className="grow shrink basis-0 bg-white rounded-lg shadow border border-zinc-200 flex-col justify-start items-start inline-flex">
                                            <section className="self-stretch p-6 justify-between items-center inline-flex">
                                                <CardHeader className="justify-center items-center flex zinc-500">
                                                    <CardTitle className="text-zinc-950 text-base font-semibold font-['Inter'] leading-normal">Fulfillment Plan</CardTitle>
                                                </CardHeader>
                                                <article className="justify-center items-center flex">
                                                    <article className="w-6 h-6 p-[5px] rounded-tl-md rounded-bl-md border border-zinc-200 justify-center items-center flex">
                                                        <article className="w-3.5 h-3.5 relative flex-col justify-start items-start flex" />
                                                    </article>
                                                    <article className="px-1.5 border-r border-t border-b border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex">
                                                        <article className="text-zinc-950 text-sm font-medium font-['Inter'] leading-normal">Today</article>
                                                    </article>
                                                    <article className="w-6 h-6 p-[5px] rounded-tr-md rounded-bl-[1px] rounded-br-md border-r border-t border-b border-zinc-200 justify-center items-center flex">
                                                        <article className="w-3.5 h-3.5 relative flex-col justify-start items-start flex" />
                                                    </article>
                                                </article>
                                            </section>
                                            <article className="self-stretch h-[389px] px-6 pb-6 flex-col justify-start items-start gap-4 flex">
                                                <article className="self-stretch justify-start items-start gap-4 inline-flex">
                                                    <article className="grow shrink basis-0 p-6 rounded-md border border-zinc-200 flex-col justify-center items-start gap-3 inline-flex">
                                                        <article className="h-6 justify-start items-center gap-4 inline-flex">
                                                            <article className="text-zinc-950 text-sm font-medium font-['Inter'] leading-tight">Tue 11/29/23</article>
                                                            <Badge className="px-2.5 py-1 bg-lime-300 rounded-lg justify-center items-center gap-0.5 flex">
                                                                <article className="text-zinc-900 text-sm font-semibold font-['Inter'] leading-none">Today</article>
                                                            </Badge>
                                                        </article>
                                                        <article className="self-stretch p-6 rounded-md border border-zinc-200 justify-between items-center inline-flex">
                                                            <article className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                                                <Badge className="px-2.5 py-0.5 bg-zinc-900 rounded-full border border-slate-200/opacity-0 justify-center items-center gap-2.5 inline-flex">
                                                                    <article className="text-white text-xs font-semibold font-['Inter'] leading-none">In Progress</article>
                                                                </Badge>
                                                                <article className="self-stretch h-11 flex-col justify-start items-start gap-1 flex">
                                                                    <article className="text-zinc-950 text-sm font-normal font-['Inter'] leading-tight">09:00:00 - 10:00:00</article>
                                                                    <article className="text-zinc-500 text-sm font-normal font-['Inter'] leading-tight">1hours</article>
                                                                </article>
                                                                <article className="text-zinc-950 text-sm font-medium font-['Inter'] leading-tight">Nashville</article>
                                                                <article className="self-stretch h-[17px] py-2 flex-col justify-between items-start flex">
                                                                    <article className="self-stretch bg-zinc-200" />
                                                                </article>
                                                                <article className="self-stretch h-9 flex-col justify-start items-start gap-1 flex">
                                                                    <article className="flex-col justify-start items-start gap-0.5 flex">
                                                                        <article className="text-zinc-500 text-sm font-normal font-['Inter']">Bitrate</article>
                                                                        <article className="text-zinc-950 text-sm font-normal font-['Inter']">1,234 bps</article>
                                                                    </article>
                                                                </article>
                                                                <article className="self-stretch h-9 flex-col justify-start items-start gap-1 flex">
                                                                    <article className="flex-col justify-start items-start gap-0.5 flex">
                                                                        <article className="text-zinc-500 text-sm font-normal font-['Inter']">Requested Bitrate</article>
                                                                        <article className="text-zinc-950 text-sm font-normal font-['Inter']">1,234 bps</article>
                                                                    </article>
                                                                </article>
                                                            </article>
                                                        </article>
                                                    </article>
                                                    <article className="grow shrink basis-0 p-6 rounded-md border border-zinc-200 flex-col justify-center items-start gap-3 inline-flex">
                                                        <article className="h-6 justify-start items-center gap-4 inline-flex">
                                                            <article className="text-zinc-950 text-sm font-medium font-['Inter'] leading-tight">Tue 12/01/23</article>
                                                        </article>
                                                        <article className="self-stretch p-6 rounded-md border border-zinc-200 justify-between items-center inline-flex">
                                                            <article className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                                                <Badge className="px-2.5 py-0.5 bg-zinc-900 rounded-full border border-slate-200/opacity-0 justify-center items-center gap-2.5 inline-flex">
                                                                    <article className="text-white text-xs font-semibold font-['Inter'] leading-none">partial completed</article>
                                                                </Badge>
                                                                <article className="self-stretch h-11 flex-col justify-start items-start gap-1 flex">
                                                                    <article className="text-zinc-950 text-sm font-normal font-['Inter'] leading-tight">09:00:00 - 10:00:00</article>
                                                                    <article className="text-zinc-500 text-sm font-normal font-['Inter'] leading-tight">1hours</article>
                                                                </article>
                                                                <article className="text-zinc-950 text-sm font-medium font-['Inter'] leading-tight">Nashville</article>
                                                                <article className="self-stretch h-[17px] py-2 flex-col justify-between items-start flex">
                                                                    <article className="self-stretch bg-zinc-200" />
                                                                </article>
                                                                <article className="self-stretch h-9 flex-col justify-start items-start gap-1 flex">
                                                                    <article className="flex-col justify-start items-start gap-0.5 flex">
                                                                        <article className="text-zinc-500 text-sm font-normal font-['Inter']">Bitrate</article>
                                                                        <article className="text-zinc-950 text-sm font-normal font-['Inter']">1,234 bps</article>
                                                                    </article>
                                                                </article>
                                                                <article className="self-stretch h-9 flex-col justify-start items-start gap-1 flex">
                                                                    <article className="flex-col justify-start items-start gap-0.5 flex">
                                                                        <article className="text-zinc-500 text-sm font-normal font-['Inter']">Bitrate</article>
                                                                        <article className="text-zinc-950 text-sm font-normal font-['Inter']">1,234 bps</article>
                                                                    </article>
                                                                </article>
                                                            </article>
                                                        </article>
                                                    </article>
                                                </article>
                                            </article>
                                        </Card>
                                        <article className="grow shrink basis-0 h-[461px] bg-white rounded-lg shadow border border-zinc-200 flex-col justify-start items-start inline-flex">
                                            <article className="self-stretch p-6 justify-start items-center gap-1.5 inline-flex">
                                                <article className="justify-center items-center flex">
                                                    <article className="text-zinc-950 text-base font-semibold font-['Inter'] leading-normal">Delivered Data
                                                    </article>
                                                </article>
                                            </article>
                                            <article className="self-stretch grow shrink basis-0 px-6 pb-6 flex-col justify-start items-start gap-4 flex">
                                                <article className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-4 flex">
                                                    <article className="self-stretch h-[328px] flex-col justify-start items-center flex">
                                                        <article className="self-stretch border-b border-zinc-200 justify-start items-start inline-flex">
                                                            <article className="w-24 h-12 px-4 justify-start items-center flex">
                                                                <article className="text-zinc-500 text-sm font-medium font-['Inter'] leading-normal">Date</article>
                                                            </article>
                                                            <article className="grow shrink basis-0 h-12 px-4 justify-start items-center flex">
                                                                <article className="text-right text-zinc-500 text-sm font-medium font-['Inter'] leading-normal">UE Count</article>
                                                            </article>
                                                            <article className="grow shrink basis-0 h-12 px-4 justify-start items-center flex">
                                                                <article className="text-right text-zinc-500 text-sm font-medium font-['Inter'] leading-normal">Date Volume</article>
                                                            </article>
                                                        </article>
                                                        <article className="self-stretch border-b border-zinc-200 justify-start items-start inline-flex">
                                                            <article className="w-24 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">11/27/23</article>
                                                            </article>
                                                            <article className="grow shrink basis-0 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">5000</article>
                                                            </article>
                                                            <article className="grow shrink basis-0 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">56</article>
                                                            </article>
                                                        </article>
                                                        <article className="self-stretch border-b border-zinc-200 justify-start items-start inline-flex">
                                                            <article className="w-24 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">11/27/23</article>
                                                            </article>
                                                            <article className="grow shrink basis-0 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">5000</article>
                                                            </article>
                                                            <article className="grow shrink basis-0 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">56</article>
                                                            </article>
                                                        </article>
                                                        <article className="self-stretch border-b border-zinc-200 justify-start items-start inline-flex">
                                                            <article className="w-24 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">11/27/23</article>
                                                            </article>
                                                            <article className="grow shrink basis-0 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">5000</article>
                                                            </article>
                                                            <article className="grow shrink basis-0 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">56</article>
                                                            </article>
                                                        </article>
                                                        <article className="self-stretch border-b border-zinc-200 justify-start items-start inline-flex">
                                                            <article className="w-24 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">11/27/23</article>
                                                            </article>
                                                            <article className="grow shrink basis-0 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">5000</article>
                                                            </article>
                                                            <article className="grow shrink basis-0 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">56</article>
                                                            </article>
                                                        </article>
                                                        <article className="self-stretch border-b border-zinc-200 justify-start items-start inline-flex">
                                                            <article className="w-24 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">11/27/23</article>
                                                            </article>
                                                            <article className="grow shrink basis-0 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">5000</article>
                                                            </article>
                                                            <article className="grow shrink basis-0 self-stretch p-4 justify-start items-center gap-2.5 flex">
                                                                <article className="text-right text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">56</article>
                                                            </article>
                                                        </article>
                                                    </article>
                                                </article>
                                            </article>
                                        </article>
                                    </article>
                                </article>
                                <article className="w-96 self-stretch bg-white rounded-lg shadow border border-zinc-200 flex-col justify-start items-start inline-flex">
                                    <article className="self-stretch p-6 justify-between items-center inline-flex">
                                        <article className="justify-center items-center flex">
                                            <article className="text-zinc-950 text-base font-semibold font-['Inter'] leading-normal">Timeline (UTC)        ( ⭐⭐ 미작업 ⭐⭐ )</article>
                                        </article>
                                        <article className="justify-end items-center gap-2 flex">
                                            <article className="text-zinc-500 text-sm font-normal font-['Inter'] leading-normal">Data as of 05/29/24 21:55:12
                                            </article>
                                            <article className="p-2.5 rounded-md border border-zinc-200 justify-center items-center gap-2 flex">
                                                <article className="w-4 h-4 relative" />
                                            </article>
                                        </article>
                                    </article>
                                    <article className="self-stretch h-[154px] px-6 pb-6 flex-col justify-start items-start gap-4 flex">
                                        <article className="p-3 bg-white rounded-md flex-col justify-start items-start gap-2.5 flex">
                                            <article className="flex-col justify-start items-start gap-1 flex">
                                                <article className="text-zinc-950 text-sm font-normal font-['Inter'] leading-[14px]">05/28/24 02:17:24
                                                </article>
                                                <article className="text-zinc-500 text-sm font-normal font-['Inter'] leading-tight">BSS</article>
                                                <article className="w-[227px] text-zinc-500 text-sm font-normal font-['Inter'] leading-tight">How to install dependencies and structure your app.</article>
                                                <article className="px-2.5 py-0.5 bg-zinc-900 rounded-full border border-slate-200/opacity-0 justify-center items-center gap-2.5 inline-flex">
                                                    <article className="text-white text-xs font-semibold font-['Inter'] leading-none">partial completed</article>
                                                </article>
                                            </article>
                                        </article>
                                    </article>
                                </article>
                            </article>
                        </article>
                        <footer className="self-stretch h-16 px-6 pb-6 justify-between items-center inline-flex">
                            <article className="px-4 py-2 bg-white rounded-md border border-zinc-200 justify-center items-center gap-2.5 flex">
                                <article className="text-zinc-950 text-sm font-medium font-['Inter'] leading-normal">Return</article>
                            </article>
                            <article className="px-4 py-2 bg-zinc-900 rounded-md justify-center items-center gap-2.5 flex">
                                <article className="text-neutral-50 text-sm font-medium font-['Inter'] leading-normal">Save</article>
                            </article>
                        </footer>
                    </article>
                </article>
            </section>
        </main>
    )
}
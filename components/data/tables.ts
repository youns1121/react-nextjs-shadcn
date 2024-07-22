"use client";

const data: Delivery[] = [
    {
        id: "m5gr84i9",
        status: "booked",
        title: "ken99@yahoo.com",
        type: "stationary"
    },
    {
        id: "f3u1rdceuv4",
        status: "failed",
        title: "abe45@gmail.com",
        type: "mobile"
    },
    {
        id: "derv4gs0",
        status: "pending review",
        title: "monserrat44@gmail.com",
        type: "mobile"
    },
    {
        id: "5kma53ae",
        status: "cancelled",
        title: "silas22@gmail.com",
        type: "stationary"
    },
    {
        id: "qwer10p",
        status: "partial compleated",
        title: "ysmin@ntels.com",
        type: "stationary"
    },
    {
        id: "m5gr8as9",
        status: "booked",
        title: "ken99@yahoo.com",
        type: "stationary"
    },
    {
        id: "fdfgw3",
        status: "failed",
        title: "abe45@gmail.com",
        type: "mobile"
    },
    {
        id: "derv2as0",
        status: "pending review",
        title: "monserrat44@gmail.com",
        type: "mobile"
    },
    {
        id: "5kmfa53ae",
        status: "cancelled",
        title: "silas22@gmail.com",
        type: "stationary"
    },
    {
        id: "bhqecjs4p",
        status: "booked",
        title: "ysmin@ntels.com",
        type: "mobile"
    },
    {
        id: "m5xgr84i9",
        status: "booked",
        title: "ken99@yahoo.com",
        type: "stationary"
    },
    {
        id: "rcsqwe32",
        status: "failed",
        title: "abe45@gmail.com",
        type: "mobile"
    },
    {
        id: "derv1ws0",
        status: "pending review",
        title: "monserrat44@gmail.com",
        type: "mobile"
    },
    {
        id: "5kma5lxae",
        status: "cancelled",
        title: "silas22@gmail.com",
        type: "stationary"
    },
    {
        id: "bhqecj4p",
        status: "failed",
        title: "ysmin@ntels.com",
        type: "stationary"
    },
    {
        id: "a2gr84i9",
        status: "booked",
        title: "ken99@yahoo.com",
        type: "stationary"
    },
    {
        id: "nmhfw567",
        status: "failed",
        title: "abe45@gmail.com",
        type: "mobile"
    },
    {
        id: "derv3xs0",
        status: "pending review",
        title: "monserrat44@gmail.com",
        type: "mobile"
    },
    {
        id: "dcj3k4p",
        status: "cancelled",
        title: "silas22@gmail.com",
        type: "stationary"
    },
    {
        id: "lj3k4p",
        status: "cancelled",
        title: "ysmin@ntels.com",
        type: "stationary"
    },
    {
        id: "scj3k4p",
        status: "booked",
        title: "ken99@yahoo.com",
        type: "stationary"
    },
    {
        id: "gr84i9",
        status: "failed",
        title: "abe45@gmail.com",
        type: "mobile"
    },
    {
        id: "sdj3k4p",
        status: "pending review",
        title: "monserrat44@gmail.com",
        type: "mobile"
    },
    {
        id: "derv5cs0",
        status: "cancelled",
        title: "silas22@gmail.com",
        type: "stationary"
    },
    {
        id: "zp9j4q3p",
        status: "pending review",
        title: "ysmin@ntels.com",
        type: "mobile"
    }
]


type Delivery = {
    id: string
    status: Status
    title: string
    type: Type
}

type Status = "partial compleated" | "cancelled" | "pending review" | "booked" | "failed";

type Type = "stationary" | "mobile";

export { data };
export type { Delivery, Status, Type };
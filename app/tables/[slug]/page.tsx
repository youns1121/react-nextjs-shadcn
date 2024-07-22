"use client"

import { notFound } from "next/navigation";
import { useEffect } from "react";
import { useDelivery } from "@/hooks/useDelivery";

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    useEffect(() => {
        console.log('Page Mounted')
        return () => {
            console.log('Page Unmounted')
        }
    }, [])
    const { data } = useDelivery(slug);
    if (slug === "f3u1rdceuv4") return notFound();


    return <div>My Post: {slug}</div>
}
"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react"

const Test = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const isToggle = () => {
        if (isOpen) {
            return "on"
        }

        return "off"
    }

    const getBackgroundColor = () => {
        if (isOpen) {
            return "green";
        }

        return "red";
    }


    return (
        <   Button onClick={() => setIsOpen(!isOpen)} style={{ backgroundColor: getBackgroundColor() }}>
            {isToggle()}
        </Button>
    )
}

export default Test;
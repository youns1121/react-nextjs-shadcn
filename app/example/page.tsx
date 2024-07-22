"use client"

import { Fragment, useState } from "react";
import { useRouter } from 'next/navigation'

import { Separator } from "@/components/ui/separator"
import { Menu, MenuItemProps } from "@/components/ui/menu/menu";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {
    Card
} from "@/components/ui/card"

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Group, HomeIcon, Navigation, Option } from "lucide-react";

import { People } from "@/model/people";

const peoples: People[] = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
}]

const copyTextToClipboard = async (): Promise<boolean> => {
    try {
        await navigator.clipboard.writeText(JSON.stringify(peoples));
        console.log('Text copied to clipboard');
        return true;
    } catch (err) {
        console.error('Failed to copy text: ', err);
        return false;
    }
};

const Example = () => {
    const [isToogle, setIsToogle] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [isCopy, setIsCopy] = useState<boolean>(false);

    const router = useRouter();
    const items: MenuItemProps[] = [
        {
            key: "home",
            label: "HOME",
            icon: <HomeIcon className={"h-4 w-4"} />,
            onTitleClick(e) {
                router.push('/');
            },
        },
        {
            key: 'sub1',
            label: 'Navigation One',
            icon: <Navigation className={"h-4 w-4"} />,
            children: [
                {
                    key: 'g1',
                    label: 'Item 1',
                    type: 'group',
                    icon: <Group className={"h-4 w-4"} />,
                    children: [
                        {
                            key: '1',
                            label: 'Option 1',
                            icon: <Option className={"h-4 w-4"} />,
                        },
                        {
                            key: '2',
                            label: 'Option 2',
                        },
                    ],
                },
                {
                    key: 'g2',
                    label: 'Item 2',
                    type: 'group',
                    children: [
                        {
                            key: '3',
                            label: 'Option 3',
                        },
                        {
                            key: '4',
                            label: 'Option 4',
                        },
                    ],
                },
            ],
        },
        {
            key: 'sub2',
            label: 'Navigation Two',

            children: [
                {
                    key: '5',
                    label: 'Option 5',
                },
                {
                    key: '6',
                    label: 'Option 6',
                },
                {
                    key: 'sub3',
                    label: 'Submenu',
                    children: [
                        {
                            key: '7',
                            label: 'Option 7',
                        },
                        {
                            key: '8',
                            label: 'Option 8',
                        },
                    ],
                },
            ],
        },
        {
            key: 'sub4',
            label: 'Navigation Three',

            children: [
                {
                    key: '9',
                    label: 'Option 9',
                },
                {
                    key: '10',
                    label: 'Option 10',
                },
                {
                    key: '11',
                    label: 'Option 11',
                },
                {
                    key: '12',
                    label: 'Option 12',
                },
            ],
        },
        {
            key: 'grp',
            label: 'Group',
            type: 'group',
            children: [
                {
                    key: '13',
                    label: 'Option 13',
                },
                {
                    key: '14',
                    label: 'Option 14',
                },
            ],
        },
    ];
    return (
        <>
            <Menu className="w-1/6" items={items} />
            <Card className="flex flex-col w-5/6 h-[500px] justify-center items-center">
                <Dialog onOpenChange={(isOpen: boolean) => {
                    if (!isOpen) {
                        setIsToogle(false);
                    }
                }}>
                    <DialogTrigger className="h-[50px] justify-center">문제 1</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>문제 1</DialogTitle>
                            <DialogDescription>
                                아래 버튼을 클릭할 때마다 ON/OFF가 되도록 만드세요.
                            </DialogDescription>
                        </DialogHeader>
                        <div>
                            <Button onClick={() => setIsToogle(!isToogle)}>{!isToogle ? "OFF" : "ON"}</Button>
                        </div>
                    </DialogContent >
                </Dialog>
                <Dialog onOpenChange={(isOpen: boolean) => {
                    if (!isOpen) {
                        setInputValue("")
                    }
                }}>
                    <DialogTrigger className="h-[50px] justify-center">문제 2</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>문제 2</DialogTitle>
                            <DialogDescription>
                                아래의 input에 값을 입력하면 아래에 입력한 값을 보여주세요.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Please input your name" onChange={(e) => setInputValue(e.target.value)} />
                                <p>{inputValue}</p>
                            </div>
                        </div>
                    </DialogContent >
                </Dialog>
                <Dialog onOpenChange={(isOpen: boolean) => {
                    if (!isOpen) {
                        setInputValue("");
                        setIsCopy(false);
                    }
                }}>
                    <DialogTrigger className="h-[50px] justify-center">문제 3</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>문제 3</DialogTitle>
                            <DialogDescription>
                                데이터를 참고해서 결과를 JSX로 표현하세요
                            </DialogDescription>
                        </DialogHeader>
                        <Separator />

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>데이터</AccordionTrigger>
                                <AccordionContent>
                                    <Button size="sm" onClick={async () => {
                                        await copyTextToClipboard() && setIsCopy(true);
                                    }}>
                                        {!isCopy ? "copy" : "copied"}
                                    </Button>
                                    <article>
                                        {JSON.stringify(peoples)}
                                    </article>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <ScrollArea className="h-[400px] w-[450px] rounded-md border p-4">
                            {
                                peoples.map((people: People) => {
                                    return (
                                        <Fragment key={people.id}>
                                            <ul>
                                                <li>{people.name}</li>
                                                <li>{people.profession}</li>
                                                <li>{people.accomplishment}</li>
                                                <li>{people.imageId}</li>
                                            </ul>
                                            <Separator />
                                        </Fragment>
                                    )
                                })
                            }
                        </ScrollArea>
                    </DialogContent >
                </Dialog>
            </Card >
        </>
    )

}

export default Example;
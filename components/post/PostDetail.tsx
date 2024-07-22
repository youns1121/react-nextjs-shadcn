import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Post } from "@/model/post";
import PostUpdate from "./PostUpdate";
import { usePostDetail } from "@/service/post/usePostService";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useDeletePost } from "@/service/post/usePostService";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/service/post/queries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


type PostDetailProps = {
    isOpen: boolean,
    postDetail: Post | null,
    setIsOpen: (value: boolean) => void,
    children?: React.ReactNode
}

const formSchema = z.object({
    password: z.string().min(4).max(10),
})

const PostDetail = ({ isOpen, postDetail, setIsOpen, children }: PostDetailProps) => {
    const queryClient = useQueryClient();
    const { mutate: deletePost } = useDeletePost();
    const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);
    const [isUpdated, setIsUpdated] = useState<boolean>(false);
    const [maxWidth, setMaxWidth] = useState(1500);
    const isDragging = useRef(false);
    const { data: updatePostDetail } = usePostDetail(String(postDetail?.id), { enabled: isUpdated });

    const containerWidth = typeof window !== "undefined" ? window.innerWidth : 1;
    const rightRatio = ((containerWidth - maxWidth) / containerWidth) * 100;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
        },
    })

    const getTitle = () => {
        if (updatePostDetail) {
            return updatePostDetail.title;
        }

        const parenthesesRegex = /\(.*?\)/g;
        return postDetail?.title?.replace(parenthesesRegex, '') ?? '';
    }

    const getContent = () => {
        if (updatePostDetail) {
            return updatePostDetail.content;
        }

        return postDetail?.content;
    }

    const handleMouseMove = (event: MouseEvent) => {

        if (isDragging.current) {
            const newWidth = event.clientX;
            setMaxWidth(newWidth);
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = () => {
        isDragging.current = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };



    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const body = {
            id: updatePostDetail?.id,
            password: values.password
        }

        deletePost(body, {
            onSuccess: ({ status, message }: any) => {
                if (status >= 400) {
                    form.setError("password", { type: 'custom', message: message });
                    return;
                }
                queryClient.invalidateQueries({ queryKey: queryKeys.all });
                setIsOpen(false);
            },
            onError: (error) => console.error("error")
        });
    }

    return (
        <Sheet modal={false} open={isOpen}>
            <SheetContent className={`w-full flex`} style={{ maxWidth: `${rightRatio}%`, minWidth: "40%" }}>
                <div
                    className="w-[25px] h-full bg-gray-200"
                    style={{ cursor: "ew-resize" }}
                    onMouseDown={handleMouseDown}
                />

                {
                    !isOpenUpdate && <div className="flex-col m-5">
                        <SheetHeader className="flex flex-col space-y-2 text-center sm:text-left w-3/4">
                            <SheetTitle>{getTitle()}</SheetTitle>
                            <SheetDescription></SheetDescription>
                        </SheetHeader>
                        <p>{getContent()}</p>
                        <div className="text-right">
                            <Button type="button" onClick={() => setIsOpenUpdate(true)}>Edit</Button>
                            <Button type="button" onClick={() => setIsOpen(false)}>CLOSE</Button>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="destructive">DELETE</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogTitle></AlertDialogTitle>
                                    <Form {...form} >
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                            <FormField
                                                control={form.control}
                                                name="password"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Password</FormLabel>
                                                        <FormControl>
                                                            <Input type="password" placeholder="password" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>

                                                )}
                                            />
                                            <div className="text-right">
                                                <Button type="submit">Submit</Button>
                                                <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
                                            </div>
                                        </form>
                                    </Form>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                        <br />
                        {children}

                    </div>
                }
                {
                    isOpenUpdate && <PostUpdate postDetail={updatePostDetail ?? postDetail} setIsOpenUpdate={setIsOpenUpdate} setIsUpdated={setIsUpdated} />
                }

            </SheetContent>
        </Sheet>
    );
};

export default PostDetail;
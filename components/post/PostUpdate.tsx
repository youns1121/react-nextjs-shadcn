import { Post } from "@/model/post";
import { Input } from "../ui/input";
import { SheetHeader, SheetTitle } from "../ui/sheet";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { useUpdatePost } from "@/service/post/usePostService";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/service/post/queries";

const formSchema = z.object({
    title: z.string().min(2).max(50),
    content: z.string().min(2).max(500),
    password: z.string().min(4).max(10),
})

type PostUpdateProps = {
    postDetail: Post | null
    setIsOpenUpdate: (value: boolean) => void
    setIsUpdated: (value: boolean) => void
}

const PostUpdate = ({ postDetail, setIsOpenUpdate, setIsUpdated }: PostUpdateProps) => {
    const queryClient = useQueryClient();
    const { mutate: updatePost } = useUpdatePost();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: `${postDetail?.title}`,
            content: `${postDetail?.content}`,
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        const password = values.password;

        const body = {
            "id": postDetail?.id,
            "title": values.title,
            "content": values.content,
            "password": password
        }
        updatePost(body, {
            onSuccess: ({ status, message }: any) => {
                if (status >= 400) {
                    form.setError("password", { type: 'custom', message: message });
                    return;
                }
                queryClient.invalidateQueries({ queryKey: queryKeys.all });
                setIsOpenUpdate(false);
                setIsUpdated(true);
                form.reset();
            },
            onError: (err) => {
                console.error(err);
            }
        });
    }

    return (
        <div className="flex-col m-5">
            <SheetHeader className="flex flex-col space-y-2 text-center sm:text-left w-3/4">
                <SheetTitle>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input className="w-[500px]" placeholder="title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Content</FormLabel>
                                        <FormControl>
                                            <Textarea className="w-[500px]" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
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
                            <Button type="submit">Submit</Button>
                            <Button type="button" onClick={() => setIsOpenUpdate(false)}>Cancel</Button>
                        </form>
                    </Form>
                </SheetTitle>
            </SheetHeader>


            {/* <br />
            <div className="text-right">

            </div> */}
        </div >
    )
}

export default PostUpdate;
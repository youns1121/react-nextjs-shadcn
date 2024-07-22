import { ChangeEvent, useEffect, useState } from "react";

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useCreatePostComment } from "@/service/post/usePostService"
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/service/post/queries"


const PostCommentCreate = ({ postId }: { postId: number }) => {
    const queryClient = useQueryClient();
    const [commentValue, setCommentValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");

    const { mutate: registComment } = useCreatePostComment();

    const handleComment = async () => {
        if ("" === commentValue || "" === passwordValue) {
            return;
        }

        const postBody = {
            postId: postId,
            content: commentValue.trim(),
            password: passwordValue.trim()
        }

        registComment(postBody, {
            onError: (err) => {
                console.debug(err);
            },
            onSuccess: (success) => {
                queryClient.invalidateQueries({ queryKey: queryKeys.detailComments(String(postId)) });
                queryClient.invalidateQueries({ queryKey: queryKeys.all });
                setCommentValue("");
                setPasswordValue("");
            },
        });
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === ' ') {
            event.preventDefault();
        }
    };

    return (
        <>
            <div className="w-[700px] flex">
                <Input
                    className="w-[400px]"
                    type="text"
                    placeholder="Comment"
                    value={commentValue}
                    onChange={(e) => setCommentValue(e.target.value)}
                />
                <Input
                    className="w-[200px]"
                    type="password"
                    placeholder="password"
                    onKeyDown={handleKeyDown}
                    value={passwordValue}
                    maxLength={10}
                    onChange={(e) => setPasswordValue(e.target.value)}
                />
                <Button onClick={handleComment}>Comment</Button>
            </div>

        </>
    )
}

export default PostCommentCreate;
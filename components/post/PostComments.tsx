import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Comment } from "@/model/post";
import { convertToDate } from "@/utils/utils"

type PostCommentsProps = {
    postComment: Comment
}

const PostComments = ({ postComment }: PostCommentsProps) => {
    return (
        <>
            <Card className="w-[500px]">
                <CardHeader className="flex p-3">
                    <CardTitle className="text-lg">{postComment?.content}</CardTitle>
                    <CardDescription className="text-right">{convertToDate(String(postComment?.createdAt))}</CardDescription>
                </CardHeader>
            </Card >
            <br />
        </>
    );
}

export default PostComments;
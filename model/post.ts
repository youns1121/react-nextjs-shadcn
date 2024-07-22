export interface Post extends PostCommon {
    id?: number,
    title?: string,
    commentCount?: number,
}

export interface Comment extends PostCommon {
    id?: number,
    postId: number,
}

interface PostCommon {
    index?: number | undefined,
    content?: string,
    delYn?: string,
    password?: string,
    createdAt?: string,
    updatedAt?: string
}
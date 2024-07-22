import { Post, Comment } from '@/model/post';
import PostService from '@/service/post/PostService';

export const queryKeys = {
    all: ['posts'] as const,
    detail: (postId: string) => [...queryKeys.all, postId] as const,
    detailComments: (postId: string) => ['comments', postId] as const,
};

const queryOptions = {
    all: (options = {}) => ({
        queryKey: queryKeys.all,
        queryFn: () => PostService.getPosts(),
        ...options,
    }),
    detail: (postId: string, options = {}) => ({
        queryKey: queryKeys.detail(postId),
        queryFn: () => PostService.getPost(postId),
        ...options,
    }),
    detailComments: (postId: string, options = {}) => ({
        queryKey: queryKeys.detailComments(postId),
        queryFn: () => PostService.getPostComments(postId),
        ...options,
    }),
    detailComment: (postId: string, options = {}) => ({
        queryKey: queryKeys.detail(postId),
        queryFn: () => PostService.getPostComments(postId),
        ...options,
    }),
    create: (post: Post) => ({
        mutationFn: () => PostService.createPost(post),
    }),
    createComment: async () => ({

    }),
};

export default queryOptions;
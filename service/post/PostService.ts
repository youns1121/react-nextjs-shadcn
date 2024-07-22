import Service from '@/service/Service';
import { Post, Comment } from '@/model/post';

class PostService extends Service {
    getPosts() {
        return this.http.get<Post[]>(
            `/api/posts`,
        );
    }

    getPost(postId: string) {
        return this.http.get<Post>(
            `/api/posts/${postId}`,
        );
    }

    getComments() {
        return this.http.get<Comment[]>(
            `/api/comments`,
        );
    }

    getPostComments(postId: string) {
        return this.http.get<Comment[]>(
            `/api/comments?postId=${postId}`,
        );
    }

    createPost(post: Post) {
        return this.http.post<Post>(
            `/api/posts`,
            post,
        );
    }

    updatePost(post: Post) {
        return this.http.put<Post>(
            `/api/posts/${post.id}`,
            post,
        );
    }

    deletePost(post: Post) {
        return this.http.put<Post>(
            `/api/posts/delete/${post.id}`,
            post,
        );
    }

    createComment(comment: Comment) {
        return this.http.post<Comment>(
            `/api/comments`,
            comment,
        );
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PostService();
import { http } from '@/service/Service';
import { Photo } from '@/model/photo';

class PhotoService {
    getPhotos() {
        return http.get<Photo[]>(
            `/photos`,
        );
    }

    getPhoto(photoId: number) {
        return http.get<Photo>(
            `/photos/${photoId}`,
        );
    }

    getComments(photoId: number) {
        return http.get<Comment[]>(
            `/photo/${photoId}/comments`,
        );
    }

    getComment({ photoId, commentId }: { photoId: number, commentId: number }) {
        return http.get<Comment[]>(
            `/photo/${photoId}/comments/${commentId}`,
        );
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PhotoService();
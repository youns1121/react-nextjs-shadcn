'use client'
import PhotoCard from '@/components/photo/PhotoCard'
import { usePhotos } from '@/service/photo/usePhotoService';

export default function PhotoList() {
    const { data: photos } = usePhotos();

    return (
        <div>
            {photos?.map((photo) => {
                return (
                    <PhotoCard {...photo} key={`${photo.albumId}-${photo.id}`}></PhotoCard>
                )
            })}
        </div>
    )
}
'use client'

import { Photo } from '@/model/photo';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { usePhoto } from '@/service/photo/usePhotoService';
import { Skeleton } from '@/components/ui/skeleton';

export default function Page({ params }: { params: { slug: number } }) {
    const { slug: photoId } = params;

    const { data }: { data: Photo | undefined } = usePhoto({ photoId });

    const { id, thumbnailUrl, title } = data || {};

    return (
        <>
            {

                id ? (
                    <Card className='w-[550px] h-[300px]'>
                        <CardHeader>
                            <CardTitle>
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={thumbnailUrl} alt={title} />
                        </CardContent>
                    </Card>
                ) : (
                    <Skeleton className="rounded-lg border bg-card text-card-foreground shadow-sm w-[550px] h-[300px]" >
                        <div className='flex flex-col space-y-1.5 p-6'>
                            <Skeleton className='w-[480.38px] h-[24px]' />
                        </div>
                        <div className='w-[468.38px] h-[174px] p-6 pt-0'>
                            <Skeleton className='h-[150px] w-[150px]' />
                        </div>
                    </Skeleton>
                )
            }
        </>
    )
}
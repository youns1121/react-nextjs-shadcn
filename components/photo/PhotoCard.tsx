import { Photo } from '@/model/photo';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';

export default function PhotoCard({ id, title, thumbnailUrl }: Photo) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <Link href={`/photos/${id}`}>
                        {title}
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <img src={thumbnailUrl} alt={title} />
            </CardContent>
        </Card>
    )
}
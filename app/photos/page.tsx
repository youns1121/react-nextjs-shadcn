import Image from 'next/image'
import PhotoList from '@/components/photo/PhotoList'
import queryOptions from '@/service/photo/queries';
import { Hydrate, getDehydratedQuery } from '@/utils/react-query';
import Comments from '@/components/photo/Comments';

export default async function Home() {

    const { queryKey, queryFn } = queryOptions.all();
    const query = await getDehydratedQuery({ queryKey, queryFn });

    return (
        <main>
            <div>
                <p>Server Side Rendering with react-query</p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    </a>
                </div>
            </div>

            <div>
                <Image
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={47}
                    priority
                />
            </div>
            <br />
            <Hydrate state={{ queries: [query] }}>

                {/* Server Component */}
                <Comments id={1} />

                {/* Client Component */}
                <PhotoList />

            </Hydrate>
        </main>
    )
}
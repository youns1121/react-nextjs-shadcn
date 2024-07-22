

export default function DetailDeep({ params }: { params: { slug?: string[] } }) {
    if (params.slug?.length === 0)
        return (
            <>
                <div>DetailDeep</div>
            </>
        )

    if (!params) {
        return (
            <>
                <div>NotFound DetailDeep</div>
            </>
        )
    }

    return (
        <>
            <ul>
                <li>{params?.slug?.[0]}</li>
                <li>{params?.slug?.[1]}</li>
                <li>{params?.slug}</li>
            </ul>
        </>
    )

}

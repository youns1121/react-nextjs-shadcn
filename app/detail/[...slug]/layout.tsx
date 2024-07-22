

export default function DetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col">
            <h1>Layout of Detail</h1>
            {children}
        </div>
    );
}
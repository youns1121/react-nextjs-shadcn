export default function WithLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col">
            <h2>With Layout</h2>
            {children}
        </div>
    );
}
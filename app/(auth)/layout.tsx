export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col">
            <h2>Auth Layout</h2>
            {children}
        </div>
    );
}
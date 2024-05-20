import Navbar from './_components/Navbar.js';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head></head>
            <body>
                <Navbar></Navbar>
                {children}
            </body>
        </html>
    );
}
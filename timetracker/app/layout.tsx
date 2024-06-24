import Navbar from './_components/Navbar.js';
import "./global.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
                <title>Time Tracker</title>
            </head>
            <body>
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
import {getServerSession} from "next-auth";
import SessionProvider from "./_components/SessionProvider";

import Navbar from './_components/Navbar.js';
import "./global.css"
import { Session } from "inspector";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();
    return (
        <html>
            <head>
                <title>Time Tracker</title>
            </head>
            <body>
                <SessionProvider session={session}>
                    <Navbar/>
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}
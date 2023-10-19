'use client';
import {SessionProvider} from "next-auth/react";

export default function ClientSessionProvider({
                                            children, // will be a page or nested layout
                                        }: {
    children: React.ReactNode;
}) {
    return <SessionProvider>{children}</SessionProvider>;
}

import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function AdminRedirect() {
    useEffect(() => {
        signIn();
    }, []);

    return <p>Loding...</p>;
}
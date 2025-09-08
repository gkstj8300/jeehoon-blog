import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/shared/lib/apis/auth"; 

export default async function Admin() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user?.name}</p>
    </main>
  );
}

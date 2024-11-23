import { auth } from "@/auth";
import LoginForm from "@/components/LoginForm";

export default async function SignIn() {
  const session = await auth()
  return <LoginForm session={session} />;
}

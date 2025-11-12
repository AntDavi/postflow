import Header from "@/components/header";
import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?error=É necessário entrar para acessar o painel.");
  }

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

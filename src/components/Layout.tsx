import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />

      <div className="grow">{children}</div>

      <Footer />
    </div>
  );
}

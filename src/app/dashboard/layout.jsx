import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Sidebar />
      <main className="ml-[300px] mt-3">{children}</main>
    </section>
  );
}

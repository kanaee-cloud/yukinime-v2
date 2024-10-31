import NavDashboard from "../../../components/NavDashboard";
import Header from "../../../components/NavDashboard/Header.jsx"

export default function DashboardLayout({ children }) {
    return (
        <div className="flex">
            <NavDashboard />
            <section className="lg:ml-64 w-full p-4 flex flex-col">
                <Header />
                {children}
            </section>
        </div>
    )
}
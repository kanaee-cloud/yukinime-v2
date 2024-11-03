import NavDashboard from "../../../components/NavDashboard";
import Header from "../../../components/NavDashboard/Header.jsx"
import { authUserSession } from "../../libs/auth-libs.js";

export default async function DashboardLayout({ children }) {
    const user = await authUserSession()
    return (
        <div className="flex">
            <NavDashboard />
            <section className="lg:ml-64 w-full p-4 flex flex-col">
                <Header user={user}/>
                {children}
            </section>
        </div>
    )
}
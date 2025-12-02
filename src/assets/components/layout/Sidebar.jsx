import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiHome, HiChartBar, HiPlusCircle } from "react-icons/hi"
import AddTransactionForm from './AddTransactionForm'
import "./sh.css"
export default function Sidebar({ }) {
    const { pathname } = useLocation()
    const [ShowAdd, setShowAdd] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false)

    const menu = [
        {
            name: "Dashboard", icon: <HiHome />, path: "/"
        },
        {
            name: "reports", icon: <HiChartBar />, path: "/reports"
        },
        {
            name: "profile", icon: <HiHome />, path: "/profile"
        }
    ]


    return (
        <>
            <aside className="bg-gray-100">
                <div className=" flex items-center pjustify-center py-4 gap-2" >
                    <h1 className="font-bold text-blue-500 font-[Poppins]">Finance</h1>
                    <button className="ShowAdd" onClick={() => setShowAdd(true)}><HiPlusCircle />Add</button>


                </div>
                {menu.map((m) => (
                    <Link to={m.path}>
                        <span>{m.name}</span>
                        <span>{m.icon}</span>
                    </Link>
                ))}
            </aside>

            <div>
                {ShowAdd && <AddTransactionForm onClose={() => setShowAdd(false)} />}
            </div>
        </>

    )
}
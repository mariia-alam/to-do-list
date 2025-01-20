import { Outlet } from "react-router-dom";
import NavBarTop from "../Components/NavBarTop";
export default function Root() {

    return (
    <>
        <main>

            <NavBarTop/>
            <p>TO DO LIST</p>
            <div className="main-content">
                <Outlet/>
            </div>
        </main>
    </>
    )
}

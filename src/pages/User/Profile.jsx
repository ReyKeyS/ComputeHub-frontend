import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import NavbarProfile from "../../components/NavbarProfile"

function Profile() {
    return (
        <>
            <Header />
            <div className="min-h-[calc(100vh-5rem)] grid grid-cols-3 py-10 px-32 bg-abu-gelap">
                <NavbarProfile />
                <div className="col-span-2 px-10 text-putih">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Profile
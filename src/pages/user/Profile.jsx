import Footer from "../../components/Footer"
import Header from "../../components/Header"
import NavbarProfile from "../../components/NavbarProfile"

function Profile() {
    return (
        <>
            <Header />
            <div className="min-h-[calc(100vh-5rem)] grid grid-cols-3 p-20">
                <NavbarProfile />
            </div>
            <Footer />
        </>
    )
}
export default Profile
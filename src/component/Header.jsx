import { Link } from 'react-router-dom'
function Header(){
    return(
        <nav className="grid grid-cols-7 bg-abu-super-gelap place-items-center">
            <div className="bg-abu-super-gelap text-white rounded-lg text-2xl p-2 flex justify-center">Compute<a className="bg-oranye rounded-lg font-bold text-abu-super-gelap">HUB</a></div>
            <div className="text-white text-xl">Shop</div>
            <div className="text-white text-xl">Chat</div>
            <div className="text-white text-xl col-span-2 ml-auto">Search</div>
            <div className="text-white text-xl">Cart</div>
            <Link to="/login">
                <div className="font-bold text-white text-xl">Sign in</div>
            </Link>
        </nav>
    )
}
export default Header
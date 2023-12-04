function ProfileDashboard() {
    return (
        <>
            <span className="text-6xl font-bold">Dashboard</span>
            <div className="grid grid-cols-2 gap-4 h-full">
                <div className="border border-oranye rounded-3xl h-1/2 p-8 font-black text-5xl flex flex-col">
                    <div className="flex flex-col">
                        <div>
                            <span className="">0 </span>
                            <span className="text-oranye">Produk</span>
                        </div>
                        <span className="text-xl">In Your Cart</span>
                    </div>
                </div>
                <div className="border border-oranye rounded-3xl h-1/2 p-8 font-black text-5xl grid grid-rows-2">
                    <div className="flex flex-col">
                        <div>
                            <span className="">2 </span>
                            <span className="text-oranye">Produk</span>
                        </div>
                        <span className="text-xl">Ordered</span>
                    </div>
                    <div className="self-end">
                        <button className="bg-oranye px-3 py-2 rounded-xl text-abu-super-gelap">History</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileDashboard
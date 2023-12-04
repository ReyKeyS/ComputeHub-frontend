function ProfileEdit() {
    return (
        <>
            <span className="font-bold text-6xl">Edit Profile</span>
            <div className="grid grid-cols-2 text-3xl gap-y-20 mt-20">
                <span className="justify-self-center">Name</span>
                <input type="text" placeholder="name" className="border border-oranye rounded-lg bg-abu-super-gelap w-full" />
                <span className="justify-self-center">Email</span>
                <input type="text" placeholder="email" className="border border-oranye rounded-lg bg-abu-super-gelap w-full" />
                <span className="justify-self-center">Address</span>
                <input type="text" placeholder="address" className="border border-oranye rounded-lg bg-abu-super-gelap w-full" />
            </div>
            <div className="flex justify-end mt-20">
                <button className="bg-oranye px-5 py-4 text-abu-super-gelap rounded-lg font-bold text-3xl">Save</button>
            </div>
        </>

    )
}
export default ProfileEdit

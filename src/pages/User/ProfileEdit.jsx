import { useEffect, useState } from "react"
import client from "../../services/client"
import { useForm } from "react-hook-form"
import Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi"
function ProfileEdit() {
    const [user, setUser]=useState()

    const { register, handleSubmit, reset , formState: { errors } } = useForm()

    useEffect(() => {
        if (localStorage.getItem('user_token')) {
            client.get('/users/detail', {
                headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
            }).then((res) => {
                setUser(res.data)
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    },[])

    const updateUser=(data) => {
        console.log("data", data);
        let isi={
            display_name:data.display_name,
            address:data.address,
            phone_number:data.phone_number
        }
        client.put(`users/update/${user.email}`,isi,{
            headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") }
        }).then((res) => {
            // setListUsers(res.data)
            alert(res.data.message)
            navigate(0)
          }).catch((err) => {
            console.log(err);
          })
    }
    return (
        <form onSubmit={handleSubmit(updateUser)}>
            <span className="font-bold text-6xl">Edit Profile</span>
            <div className="grid grid-cols-2 text-3xl gap-y-20 mt-20">
                <span className="justify-self-center">Name</span>
                <input type="text" placeholder="name" className="border border-oranye rounded-lg bg-abu-super-gelap w-full" defaultValue={user?.display_name} {...register("display_name")}/>
                <span className="justify-self-center">Phone Number</span>
                <input type="number" placeholder="phone number" className="border border-oranye rounded-lg bg-abu-super-gelap w-full" defaultValue={user?.phone_number} {...register("phone_number")}/>
                <span className="justify-self-center">Address</span>
                <textarea placeholder="address" rows="4" cols="50" className="border border-oranye rounded-lg bg-abu-super-gelap w-full" defaultValue={user?.address} {...register("address")}/>
            </div>
            <div className="flex justify-end mt-20">
                <button type="submit" className="bg-oranye px-5 py-4 text-abu-super-gelap rounded-lg font-bold text-3xl">Save</button>
            </div>
        </form>

    )
}
export default ProfileEdit

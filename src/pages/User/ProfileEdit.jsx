import { useEffect, useState } from "react"
import client from "../../services/client"
import { useForm } from "react-hook-form"
import Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi"

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from "react-router-dom"

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#1b1b1b",
    backgroundColor: "#ffa31a",
    '&:hover': {
        backgroundColor: "#d17e00",
    },
}));

function ProfileEdit() {
    const [user, setUser] = useState()
    const [profpic, setProfpic] = useState()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('user_token')) {
            client.get('/users/detail', {
                headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
            }).then((res) => {
                setUser(res.data)
                // console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [])

    const updateUser = (data) => {
        console.log("data", data);
        console.log(profpic);
        if (profpic) {
            const formData = new FormData()
            formData.append("picture", profpic[0])
            client.put(`/users/updateprofpict/${user?.email}`, formData, {
                headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
                body: "form/data"
            }).then((res) => {
                alert(res.data.message);
                navigate(0)
            }).catch((err) => {
                console.log(err);
            })
        }

        let isi = {
            display_name: data.display_name,
            address: data.address,
            phone_number: data.phone_number
        }
        client.put(`users/update/${user.email}`, isi, {
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
                <input type="text" placeholder="name" className="border border-oranye rounded-lg bg-abu-super-gelap w-full" defaultValue={user?.display_name} {...register("display_name")} />
                <span className="justify-self-center">Phone Number</span>
                <input type="number" placeholder="phone number" className="border border-oranye rounded-lg bg-abu-super-gelap w-full" defaultValue={user?.phone_number} {...register("phone_number")} />
                <span className="justify-self-center">Address</span>
                <textarea placeholder="address" rows="4" cols="50" className="border border-oranye rounded-lg bg-abu-super-gelap w-full" defaultValue={user?.address} {...register("address")} />
                <span className="justify-self-center">Profile Picture</span>
                <div>
                    <ColorButton size="large" component="label" variant="contained" startIcon={<CloudUploadIcon />} >
                        <p className='font-bold'>Upload Picture</p>
                        <VisuallyHiddenInput type="file" onChange={(e) => { setProfpic(e.target.files) }} />
                    </ColorButton>
                    {profpic && <span className="text-sm ml-3">{profpic[0].name}</span>}
                </div>
            </div>
            <div className="flex justify-end mt-20">
                <button type="submit" className="bg-oranye px-5 py-4 text-abu-super-gelap rounded-lg font-bold text-3xl">Save</button>
            </div>
        </form>

    )
}
export default ProfileEdit

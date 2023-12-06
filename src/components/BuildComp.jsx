import React, { useState, useEffect } from 'react'
import client from '../services/client'
import Select from 'react-select'

// Material UI
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

// Custom Style React-Select
const customStyles = {
    control: (base, { isFocused }) => ({
        ...base,
        borderColor: isFocused ? '#d17e00' : '#ffa31a',
        backgroundColor: '#292929',
        borderRadius: "10px",
        width: "45rem"
    }),
    option: (base, { isFocused }) => ({
        ...base,
        backgroundColor: isFocused ? '#292929' : "#1b1b1b",
        color: 'white',
        alignItems: 'center',
        paddingLeft: '15px',
    }),
    singleValue: (base) => ({
        ...base,
        color: "white",
    }),
    container: (base) => ({
        ...base,
        width: '100%',
    }),
    menuList: (base) => ({
        ...base,
        backgroundColor: "#292929",
    }),
    input: (base) => ({
        ...base,
        color: "white",
    })
};

const BuildComp = ({ item, grandTotal, setGrandTotal, idx, items, setItems, compabilityProc, setCompabilityProc }) => {
    const { type } = item
    const [listItem, setListItem] = useState([])
    const [selectedItem, setSelectedItem] = useState({})
    const [qty, setQty] = useState(0)
    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        client.get(`items/category/${type}`).then((res) => {
            let temp = []
            temp.push({ value: "", label: "Select..."})
            if (type == "Motherboard"){
                for (const i of res.data) {
                    if (compabilityProc != "" && i.name.toLowerCase().includes(compabilityProc))
                        temp.push({ value: i, label: i.name })
                    else if (compabilityProc == ""){
                        temp.push({ value: i, label: i.name })
                    }
                }
            }else{
                for (const i of res.data) {
                    temp.push({ value: i, label: i.name })
                }
            }
            setListItem(temp)
        }).catch(err => console.log(err));
    }, [compabilityProc])

    const minQty = () => {
        if (qty-1 >= 0){
            setQty(qty-1)
            countSubTotal(-1)

            let price = selectedItem.price;
            if (selectedItem.discount && selectedItem.discount.promo_price) price = selectedItem.discount.promo_price
            setGrandTotal(grandTotal - price)
        } 
        else alert("Quantity can't be less than zero")
    }

    const maxQty = () => {
        if (qty+1 <= selectedItem?.stock){
            setQty(qty+1)
            countSubTotal(1)

            let price = selectedItem.price;
            if (selectedItem.discount && selectedItem.discount.promo_price) price = selectedItem.discount.promo_price
            setGrandTotal(grandTotal + price)
        }     
        else alert('Stock is out of range')
    }

    const countSubTotal = (change) => {
        if (selectedItem){
            let price = selectedItem.price;
            if (selectedItem.discount && selectedItem.discount.promo_price) price = selectedItem.discount.promo_price
            
            setSubtotal((parseInt(qty)+parseInt(change))*price)

            items[idx] = {
                ...items[idx],
                amount: parseInt(qty)+parseInt(change)
            }
            setItems([...items])
        }
    }

    return (<div className='w-full flex items-center'>
        <div className='w-[100rem] py-4'>
            <p className="text-oranye text-4xl font-bold text-end">{type}</p>
        </div>
        <div className='ps-10 py-4'>
            <Select
                className='basic-single text-lg'
                classNamePrefix='select'
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={true}
                name="Category"
                options={listItem}
                styles={customStyles}
                onChange={(e) => {
                    if (e.value != ""){
                        setSelectedItem(e.value)
                        setQty(1)
                        setSubtotal(e.value.price)
    
                        let price = e.value.price;
                        if (e.value.discount && e.value.discount.promo_price) price = e.value.discount.promo_price
                        setGrandTotal(grandTotal + price)
                        
                        items[idx] = {
                            type: type,
                            item_id: e.value._id,
                            amount: 1
                        }
                        setItems([...items])
    
                        if (type == "Processor") {
                            if ((e.value.name).toLowerCase().includes("amd")) setCompabilityProc("amd")
                            else if ((e.value.name).toLowerCase().includes("intel")) setCompabilityProc("intel")
                        }
                    }else{
                        if (selectedItem){
                            setGrandTotal(grandTotal - subtotal);

                            setSelectedItem({})
                            setQty(0)
                            setSubtotal(0)

                            items[idx] = {
                                type: type,
                                item_id: "",
                                amount: 0
                            }
                            setItems([...items])
                        }
                    }
                }}
            />
        </div>
        <div className='w-[100rem] flex justify-center py-3'>
            <div className='h-[3rem] flex justify-end items-center'>
                <button className='w-8 h-8 bg-oranye rounded-full flex items-center justify-center' onClick={minQty}><RemoveIcon sx={{color: "black"}}/></button>
                <input type="text" className="rounded-lg text-black font-bold px-4 py-1 mx-2 w-16 text-center text-lg" value={qty} min={0} max={selectedItem?selectedItem.stock:0} readOnly/>
                <button className='w-8 h-8 bg-oranye rounded-full flex items-center justify-center' onClick={maxQty}><AddIcon sx={{color: "black"}}/></button>
            </div>
        </div>
        <div className="w-[145rem] h-fit text-4xl text-oranye font-bold flex gap-4 items-center justify-center">
            <div>Rp</div>
            <div className="w-full bg-white text-abu-gelap rounded-xl px-4 py-1 flex items-center">{subtotal.toLocaleString("id-ID")}</div>
        </div>
    </div>)
}

export default BuildComp
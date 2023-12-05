import React from 'react'
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

const BuildComp = ({type}) => {
    return (<div className='w-full flex items-center'>
        <div className='w-[100rem] py-4'>
            <p className="text-oranye text-4xl font-bold text-end">{type}</p>
        </div>
        <div className='ps-10 py-4'>
            <Select
                className='basic-single'
                classNamePrefix='select'
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={true}
                name="Category"
                options={[
                    { value: "All", label: "Select Category..." },
                    { value: "All", label: "Select Category..." }
                ]}
                styles={customStyles}
                onChange={(e) => {console.log(e.value)}}
            />
        </div>
        <div className='w-[100rem] flex justify-center py-3'>
            <div className='h-[3rem] flex justify-end items-center'>
                <button className='w-8 h-8 bg-oranye rounded-full flex items-center justify-center' ><RemoveIcon sx={{color: "black"}}/></button>
                <input type="text" className="rounded-lg text-black px-4 py-1 mx-2 w-16 text-center text-lg" readOnly/>
                <button className='w-8 h-8 bg-oranye rounded-full flex items-center justify-center' ><AddIcon sx={{color: "black"}}/></button>
            </div>
        </div>
        <div className="w-[145rem] h-fit text-4xl text-oranye font-bold flex gap-4 items-center justify-center">
            <div>Rp</div>
            <div className="w-full bg-white rounded-xl px-4 py-1 flex items-center">100.000.000.000</div>
        </div>
    </div>)
}

export default BuildComp
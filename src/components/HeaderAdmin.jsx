import ComputerIcon from '@mui/icons-material/Computer';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
function HeaderAdmin(params) {
    return (
        <>
            <div className='bg-abu-gelap border-b-2 border-oranye shadow-2xl w-full h-[6rem] text-white text-4xl grid grid-cols-5 place-content-center'>
                <div className='col-start-5 flex gap-4'>
                    <NotificationsNoneIcon fontSize=''/>
                    <img src="/img/istts_bg.png" alt="" className='w-10 h-10'/>
                    <span className='font-bold'>Admin</span>
                </div>
          </div>
        </>
    )
}
export default HeaderAdmin
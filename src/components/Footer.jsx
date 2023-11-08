import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer(params) {
    return (
        <footer className='bg-abu-super-gelap text-white flex flex-col p-5 gap-8'>
            <div className='text-6xl text-center'>Compute<a className='font-bold bg-oranye text-abu-super-gelap rounded-lg'>HUB</a></div>
            <div className='text-center text-3xl'>Contact us!</div>
            <div className='text-3xl text-center'>
                <EmailIcon sx={{ fontSize: 50 }} />
                <InstagramIcon sx={{ fontSize: 50 }} />
                <WhatsAppIcon sx={{ fontSize: 50 }} />
            </div>
        </footer>
    )
}
export default Footer
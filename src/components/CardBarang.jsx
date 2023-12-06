import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, ThemeProvider } from '@mui/material';
import dashboardTheme from '../../dashboardTheme';
import { Link, useNavigate } from 'react-router-dom';

function CardBarang({ item }) {
    const navigate = useNavigate()

    const avg = (arr) => {
        let total = 0
        for (const i of arr) {
            total += i.rating
        }
        const avg = total / arr.length
        return avg
    }

    return (
        <ThemeProvider theme={dashboardTheme}>
            <Card sx={{ width: 250, margin: 2, border: "primary.oranye" }}>
                <CardActionArea component={Link} to={`/barang/${item._id}`} >
                    <CardMedia
                        component="img"
                        // height="540"
                        image={import.meta.env.VITE_BACKEND_GET_PICTURE_URL + item.picture}
                        alt=""
                        className='h-56 border'
                    />
                    <CardContent className='h-48 bg-abu-gelap'>
                        <Typography gutterBottom variant="h5" component="div" color={"primary.putih"} className='line-clamp-2'>
                            {item.name}
                        </Typography>
                        <Typography gutterBottom variant='body2' color={"primary.putih"} className='mt-20'>
                            {item.ratings.length>0?parseFloat(avg(item.ratings)):0}<StarIcon sx={{ color: yellow[500] }} />
                        </Typography>
                        <Typography gutterBottom variant="body1" color="primary.oranye">
                            {item.discount &&
                                <div className=' font-bold text-xl'>Rp {item.discount.promo_price.toLocaleString('id-ID')}</div>
                            }
                        </Typography>
                        <Typography gutterBottom variant="body1" fontWeight={700} marginTop={"auto"} >
                            <span className={(item.discount ? " line-through text-abu-abu text-sm " : " text-putih text-xl")}>Rp {item.price.toLocaleString('id-ID')}</span>
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    )
}
export default CardBarang
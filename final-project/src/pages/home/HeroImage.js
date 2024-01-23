
import { Box, Typography, Button, Paper } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import shoulderGirl from '../../images/shoulderGirl.png';
import skincare from '../../images/skincare.png';
import facepacks from '../../images/facepacks.png';
import { makeStyles, createStyles } from '@mui/styles';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const useStyles = makeStyles((theme) =>
    createStyles({
        imageSlider: {
            width: '100%', // Ensure the image takes the full width of the container
            // Maintain the aspect ratio of the image
            position: 'relative',
            display: 'block', width: '100%', borderRadius: '24px !important', marginTop: 2, height: 400,

            [theme.breakpoints?.down('md')]: {

                height: 200,

            },
            [theme.breakpoints?.down('sm')]: {

                height: 120,

            },

        },
        textOverlay: {
            color: '#1B4B66 !important',
            position: 'absolute',
            bottom: 0,
            right: 17,
            top: '50%',
            transform: 'translateY(-50%)',
            padding: 30,
            width: '55%',
            height: '80%',
            borderRadius: '24px 0px 0px 24px !important',
            fontSize: 21,
            fontWeight: 200,
            backgroundColor: 'rgba(222, 222, 222, 0.7) !important',
            backdropFilter: 'blur(0.5px)',
            cursor: 'pointer',
            display: 'flex', flexDirection: 'column', justifyContent: "space-evenly !important",
            [theme.breakpoints?.down('sm')]: {

                height: 100,
                right: 11,

            },

        },
        button: {
            width: '180px',

            alignItems: 'center',
            justifyContent: 'space-evenly !important',
            backgroundColor: '#1B4B66 !important',
            [theme.breakpoints?.down('sm')]: {

                display: 'none !important',

            },
        },
        arrowIcon: {
            marginLeft: theme.spacing(1),
        },



    }),
);
export const HeroImage = (props) => {
    const classes = useStyles();
    var items = [
        {
            id: 1,
            name: "Shoulder Girl",
            image: shoulderGirl
        },
        {
            id: 2,
            name: "MakeUp",
            image: skincare
        },
        {
            id: 3,
            name: 'FacePacks',
            image: facepacks
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}


function Item(props) {
    const classes = useStyles();

    return (
        <Box p={2} position='relative' sx={{ textAlign: 'right' }}>
            <Box component='img' src={props.item.image} alt={props.item.name} className={classes.imageSlider} />
            {props.item.id === 1 && (
                <Paper className={classes.textOverlay} sx={{ textAlign: 'left' }}>
                    <Typography variant="h5" fontSize={{ xs: 24, sm: 34, md: 39, lg: 60 }} sx={{ fontWeight: 800 }}>Carry your Funk</Typography>
                    <Typography variant="p" fontSize={{ xs: 11, sm: 20, md: 25, lg: 28 }} sx={{ fontWeight: 500 }} >
                        Trendy handbags collection for your
                        party animal
                    </Typography>
                    <Button variant="contained" color="primary" className={classes.button}>
                        <ArrowForwardIcon className={classes.arrowIcon} />
                        Click Me
                    </Button>
                </Paper>
            )}
        </Box>
    );
}
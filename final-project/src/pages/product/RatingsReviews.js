import { Box, Typography ,Button} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export const RatingsReviews = ({reviews}) => {
  return (
   <>
    {reviews.map((review) => (<Box mt={3}>
    
    <Box display='flex' flexDirection='row'  alignItems='center'>
      <Box 
    
        sx={{ borderRadius:1,padding:2, alignItems: "center", flexWrap: "wrap", bgcolor:'#F4F4F4' }}
      >
        
        <Typography variant="p" sx={{fontSize:16}}>{review.rating}</Typography><StarIcon sx={{fontSize:16, color:'#FF8C4B'}}></StarIcon>

        
      </Box>
      <Box 
    
        sx={{ borderRadius:1,padding:2, alignItems: "center",  }}
      >
      <Typography variant='h6' sx={{fontSize:14, fontWeight:600}}> {review.User.username}</Typography>
      <Typography variant='subtitle1' sx={{fontSize:14, fontWeight:500, color:'#626262'}}> {review.date_posted}</Typography>
      </Box>
      </Box>

      <Typography variant="body2">{review.comment}</Typography>
  
    </Box>
    ))}

    <Button variant='contained' sx={{margin:2, width:'100%', bgcolor:'#1B4B66'}}>Write Reveiw </Button>
    </>

  );
};

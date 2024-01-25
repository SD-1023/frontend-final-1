import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import * as React from 'react';
import Box from '@mui/material/Box';
import { ProductDescription } from './ProductDescription';
import { RelatedProducts } from './RelatedProducts';
import { RatingsReviews } from './RatingsReviews';



export default function LabTabs({description , relatedProducts, reviews}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1'}}  >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' ,  bgcolor: '#F1F1F1', borderRadius:3}}>
          <TabList  onChange={handleChange} aria-label="lab API tabs example" 
                   indicatorColor='white' sx={{
                    padding:'8px 16px',
            '& button': {borderRadius:2 , color:'black', marginBlock:0.5, marginInline:1, fontSize:12},
            '& button:active':{backgroundColor:'#1B4B66', color:'white'},
            '& button:focus':{backgroundColor:'#1B4B66', color:'white'},
            
          }}>
            <Tab label="Product Description" value="1" />
            <Tab label="Related Products" value="2" />
            <Tab label="Ratings and Reviews" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><ProductDescription description={description}/></TabPanel>
        <TabPanel value="2"> <RelatedProducts relatedProducts={relatedProducts}/> </TabPanel>
        <TabPanel value="3"><RatingsReviews reviews={reviews} /></TabPanel>
      </TabContext>
    </Box>
  );
}
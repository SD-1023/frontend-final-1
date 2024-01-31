import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { AddressInfo } from './AddressInfo';
import { useState } from "react";
import brownBag from '../../images/brownbag.png';
import arrow from '../../images/arrow.svg';
import { PaymentMethod } from './PaymentMethod';

export const Accordian=()=>{

    return (
        <>
        <Accordion sx={{boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#13101E"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
          Add New Address
        </AccordionSummary>
        <AccordionDetails>
       <AddressInfo/>
        </AccordionDetails>
      </Accordion>
    
      <Accordion defaultExpanded sx={{boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#13101E"}} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Payment Method
        </AccordionSummary>
        <AccordionDetails>

<PaymentMethod/>

        </AccordionDetails>
      
      </Accordion>
      </>
    )
}
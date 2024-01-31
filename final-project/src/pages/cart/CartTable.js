import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CardMedia, Card, Box, Typography, Button } from '@mui/material';
import brownBag from '../../images/brownbag.png';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export function CartTable({ data }) {

  const products = data?.products || [];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="caption table">

        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>

        {products.map((row) => (
          <TableBody>
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" sx={{ border: 'none' }}>
                <Card sx={{ display: 'flex', boxShadow: 'none' }}>
                  <CardMedia image={brownBag} sx={{ height: 80, minWidth: 75 }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 2 }}>
                    <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                      {row['name']}
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: 500, color: '#626262' }}>
                      {row['sub_title']}
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: 500, color: '#626262' }}>
                      Qty - {row['quantity']}
                    </Typography>
                  </Box>
                </Card>
              </TableCell>
              <TableCell align="right" sx={{ border: 'none', }}>    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
                ${row['price'].toFixed(2)}

              </Box></TableCell>
              <TableCell align="right" sx={{ border: 'none', }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  {row.quantity}

                </Box>
              </TableCell>
              <TableCell align="right" sx={{ border: 'none', }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  ${+row['price'].toFixed(2) * +row.quantity}


                </Box>
              </TableCell>

            </TableRow>


          </TableBody>
        ))}


      </Table>
    </TableContainer>
  );
}

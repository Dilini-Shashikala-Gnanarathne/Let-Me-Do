import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useState } from 'react'

function UserTable(props) {
   
  return (
    <Grid >
      <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    props.rows.length>0 ? props.rows.map
                        (row=>(
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border:0}}}>
                            <TableCell component='th' scope='row'>{row.id}</TableCell>
                            <TableCell component='th' scope='row'>{row.name}</TableCell>
                            <TableCell component='th' scope='row'>{row.email}</TableCell>
                            <TableCell component='th' scope='row'>{row.password}</TableCell>
                            <TableCell component='th' scope='row'>{row.gender}</TableCell>
                            <TableCell >
                                <Button
                                sx={{margin :'0px 10px'}}
                                onClick={()=>{}}
                                >
                                    Update
                                </Button>
                                <Button
                                sx={{margin :'0px 10px'}}
                                onClick={()=>{}}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                        ))
                        : 
                       (
                        <TableRow  sx={{'&:last-child td, &:last-child th':{border:0}}}>
                        <TableCell component='th' scope='row'>No Data</TableCell>
                        </TableRow>
                       )
                    
                }
            </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}


export default UserTable


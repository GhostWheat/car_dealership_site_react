import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { useGetData } from '../../custom-hooks';
import { serverCalls } from '../../api';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import { CarForm } from '../CarForm'
import { getAuth } from 'firebase/auth';
import { AlignHorizontalLeft, FormatAlignJustify } from '@mui/icons-material';


const columns: GridColDef[] = [
    { field: 'vin', headerName: 'VIN', width: 300 },
    {
        field: 'color',
        headerName: 'Color',
        width: 120,
        editable: true,
    },
    {
        field: 'year',
        headerName: 'Year',
        width: 120,
        editable: true,
        type: 'number'
    },
    {
        field: 'make',
        headerName: 'Make',
        width: 120,
        editable: true,

    },
    {
        field: 'model',
        headerName: 'Model',
        width: 120
    },

];

interface gridData {
    data: {
        id?: string
    }
}

export const DataTable = () => {
    let { carData, getData } = useGetData()
    let [open, setOpen] = useState(false)
    let [gridData, setData] = useState<GridRowSelectionModel>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    console.log(gridData) // list of ids' from checked rows

//conditionally render data table if we have an authenticated user

    const MyAuth = localStorage.getItem('myAuth')
    console.log(MyAuth)

    if (MyAuth=="true") {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <h2>Cars in Inventory</h2>
            <DataGrid
                rows={carData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange={(newSelectionModel) => { setData(newSelectionModel) }}
                {...carData}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
            {/* Dialog Pop Up for Updating a Car */}
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id="form-dialog-title">Update a Car</DialogTitle>
                <DialogContent>
                    <DialogContentText>Car VIN: {gridData[0]}</DialogContentText>
                    <CarForm id={`${gridData[0]}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )} else {
        return(
        //return does not render datatable if user is not authenticated
        <div>
            <h3>Please sign in to view your collection!</h3>
        </div>
    )}
}
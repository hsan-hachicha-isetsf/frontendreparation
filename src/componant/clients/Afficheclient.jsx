import React from 'react'
import { useMemo } from 'react';
import { MaterialReactTable,useMaterialReactTable} from 'material-react-table';
import { Box } from '@mui/material';
import { Button } from 'react-bootstrap';


const Afficheclient = ({clients}) => {

    const columns = useMemo(
        () => [
        {
        accessorKey: 'nom', //access nested data with dot notation
        header: 'Nom client',
        size: 150,
        },
        {
            accessorKey: 'email',
            header: 'Email Client',
            size: 150,
            },
            {
                accessorKey: 'adresse',
                header: 'Adresse Client',
                size: 150,
                },
                {
                    accessorKey: '_id',
                    header: 'actions',
                    size: 120,
                    Cell: ({ cell, row }) => (
                    <div >
                    <Button
                    onClick={() => {
                    console.log("modification ...")
                    }}
                    variant="warning"
                    size="md"
                    className="text-warning btn-link edit"
                    >
                    <i class="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button
onClick={(e) => {
deleteProduct(cell.row.original._id,cell.row.original.reference,
e);
}}
variant="danger"
size="md"
className="text-danger btn-link delete"
><i className="fa fa-trash" />
</Button>
</div>),
                },
            ],
            [clients],
            );
            const table = useMaterialReactTable({
                columns,
                data: clients, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
                });           
  return (
    <div>
<MaterialReactTable table={table} />;
</div>
  )
}

export default Afficheclient

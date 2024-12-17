import React from 'react'
import { useMemo } from 'react';
import { MaterialReactTable,useMaterialReactTable} from 'material-react-table';
import { Box } from '@mui/material';
import { Button } from 'react-bootstrap';


const Affichedemanderep = ({demandesrep}) => {

    const columns = useMemo(
        () => [
        {
        accessorKey: 'numDemande', //access nested data with dot notation
        header: 'Demande N°',
        size: 50,
        },
        {
            accessorKey: 'dateDepotAppareil',
            header: 'Date dépot',
            size: 80,
            },
            {
                accessorKey: 'datePrevueReparation',
                header: 'Date Prévue',
                size: 80,
                },
                {
                    accessorKey: 'etat',
                    header: 'Etat Machine',
                    size: 80,
                    },
                    {
                        accessorKey: 'symptomesPanne',
                        header: 'Symptome',
                        size: 80,
                        },

                        {
                            accessorKey: 'client.nom',
                            header: 'Client',
                            size: 80,
                            },
                            {
                                accessorKey: 'appareil.numeroSerie',
                                header: 'Apareil',
                                size: 100,
                                },
                {
                    accessorKey: 'numDemande',
                    header: 'actions',
                    size: 50,
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
// // onClick={(e) => {
// // deleteProduct(cell.row.original._id,cell.row.original.reference,
// // e);
// }}
variant="danger"
size="md"
className="text-danger btn-link delete"
><i className="fa fa-trash" />
</Button>
</div>),
                },
            ],
            [demandesrep],
            );
            const table = useMaterialReactTable({
                columns,
                data: demandesrep, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
                });           
  return (
    <div>
<MaterialReactTable table={table} />;
</div>
  )
}

export default Affichedemanderep

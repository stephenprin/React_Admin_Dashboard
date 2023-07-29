import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/dataTable';
import './user.scss';
import { userRows } from '../../utils/data'
import { useState } from 'react';
import Add from '../../components/add/Add';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
      field: 'img', headerName: 'Avatar', width: 100,
      renderCell:(params)=> {
          return <img src={params.row.img || "/noavatar.png"} alt="" />
      },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 140,
    editable: true,
    type:"string",
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 140,
    editable: true,
    type:"string",
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    editable: true,
    type:"string",
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 200,
    editable: true,
    type:"string",
  },

  {
    field: 'createdAt',
    headerName: 'Created at',
    width: 150,
    type:"string",
    editable: true,
  },
  {
      field: "verified", headerName: 'Verified', width: 100, type: 'boolean', 
  }

  
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 200,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
  
];




const Users = () => {
  const [open, setOpen]= useState(false)
  return (
    <div className="user">
      <div className='info'>
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add User</button>
        </div>
        <div>
        <DataTable slug="users" columns={ columns} rows={userRows} />
        {open && <Add slugs='user' columns={columns} setOpen={setOpen } />}
      </div>
    </div>
  )
}

export default Users
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/dataTable';
import { products } from '../../utils/data';
import './product.scss';
import Add from '../../components/add/Add';
import { useState } from 'react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
      field: 'img', headerName: 'Image', width: 100,
      renderCell:(params)=> {
          return <img src={params.row.img || "/noavatar.png"} alt="" />
      },
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 350,
    editable: true,
  },
  {
    field: 'color',
    headerName: 'Color',
    width: 100,
    editable: true,
    type:"color"
  },
  {
    field: 'producer',
    headerName: 'Producer',
    width: 130,
    editable: true,
    type:"string"
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
    editable: true,
    type:"number"
  },

  {
    field: 'createdAt',
    headerName: 'Created at',
    width: 150,
   type: 'Date',
    editable: true,
  },
  {
      field: "inStock", headerName: 'In-Stock', width: 100, type: 'boolean', 
  }

  
  
  
];


const Products = () => {
  const [open, setOpen]= useState(false)
  return (
    <div className="products">
      <div className='info'>
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add Product</button>
        </div>
        <div>
        <DataTable slug="products" columns={columns} rows={products} />
    {open  &&  <Add slugs="products" columns={columns} setOpen={setOpen} />}
      </div>
    </div>
  )
}

export default Products;
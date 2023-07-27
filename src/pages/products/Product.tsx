import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/dataTable';
import { products } from '../../utils/data';
import './product.scss'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
      field: 'avatar', headerName: 'Avatar', width: 100,
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
  },
  {
    field: 'producer',
    headerName: 'Producer',
    width: 130,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
    editable: true,
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
  return (
    <div className="products">
      <div className='info'>
        <h1>Products</h1>
        <button>Add Product</button>
        </div>
        <div>
        <DataTable slug="products" columns={columns} rows={products} />
      
      </div>
    </div>
  )
}

export default Products;
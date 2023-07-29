import { GridColDef } from "@mui/x-data-grid";
import "./add.scss"


type Props = {
    slugs: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}



const Add = (props: Props) => {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // axios.post('/api/${slugs}`)
    }
  return (
      <div className="add">
          <div className="modal">
              <span className="close" onClick={()=>props.setOpen(false)}>X</span>
              <h1>Add New {props.slugs}</h1>
              <form onSubmit={handleSubmit}>
                  {props.columns.filter(item => item.field !== "id" && item.field !== "img")
                      .map((col) => (
                      <div className="item">
                          <label>{col.headerName}</label>
                          <input type={col.type} placeholder={col.field
                          } />
                      </div>
                      ))}
                  <button>Send</button>
              </form>
          </div>
    </div>
  )
}

export default Add
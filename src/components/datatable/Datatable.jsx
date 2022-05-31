import React, {useState} from 'react';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource';
import {Link} from "react-router-dom";

const Datatable = () => {
  const [data, setData]=useState(userRows)

  const handleDelete=(id)=>{
    console.log(id,"id")
    setData(data.filter((item)=>item.id !== id))
  }

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" style={{cursor:"pointer"}} onClick={()=>handleDelete(params.row.id)}>Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
    <div className="datatableTitle">
      Add New user
      <Link to="/users/new" className="link" style={{textDecoration:"none"}}>
        Add New
        </Link>
      </div>
      <DataGrid
      className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

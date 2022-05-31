import React from 'react';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource';
import {Link} from "react-router-dom";

const Datatable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
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
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

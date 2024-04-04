import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {field: 'id', headerName: 'ID', width: 100, type: 'number'},
  {field: 'name', headerName: 'Tag', width: 120},
  {field: 'count', headerName: 'Count', width: 200, type: 'number'}
]

export default function Table({tags, errorMessage, isFetching}) {  
  const localeText = isFetching ? 
    { noRowsLabel: "Loading data, please wait..."} :
    { noRowsLabel: `No tags available, ${errorMessage}`}
  
  return (
    <div style={{ height: 500, width: '80%' }}>
      <DataGrid
        rows={tags}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 30, 50, 100]}
        checkboxSelection
        localeText={localeText}
      />
    </div>
  );
}

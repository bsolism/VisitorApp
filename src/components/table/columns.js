import moment from "moment";

const columns = [
  {
    field: "no",
    headerName: "N",
    width: 5,
    renderCell: (index) => {
      return <span>{index.row.id}</span>;
    },
  },
  { field: "name", headerName: "Nombre", width: 90 },
  { field: "dni", headerName: "DNI", width: 100 },
  { field: "supplier", headerName: "Supplier", width: 40 },
  {
    field: "dateInit",
    headerName: "Start Date",
    width: 100,
    renderCell: (params) => {
      return moment(params.value).format("DD-MM-YYYY HH:mm");
    },
  },
  {
    field: "dateEnd",
    headerName: "End Date",
    width: 100,
    renderCell: (params) => {
      return moment(params.value).format("DD-MM-YYYY HH:mm");
    },
  },
  { field: "note", headerName: "Note", width: 100 },
];

export default columns;

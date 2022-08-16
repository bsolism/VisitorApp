import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import columns from "./columns";
//import { useFormikContext } from "formik";

export default function Table({ data, height, setValueForm }) {
  const [selectedRow, setSelectedRow] = useState();
  const [open, setOpen] = useState(false);

  //const [values, setFieldValue] = useFormikContext();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ height: "80%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        rowHeight={30}
        headerHeight={30}
        hideFooter
        sx={{
          fontSize: 10,
        }}
        onSelectionModelChange={(ids) => {
          const selectedIds = new Set(ids);
          const selectedRows = data.filter((row) => selectedIds.has(row.id));
          setValueForm(selectedRows[0]);

          //setSelectedRow(selectedRows);
        }}
        //onCellDoubleClick={handleOpen}
      />
    </div>
  );
}

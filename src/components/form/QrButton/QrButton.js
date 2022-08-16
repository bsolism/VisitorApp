import React, { useState } from "react";
import Button from "@mui/material/Button";
import BasicModal from "../../basicModal";

export default function QrButton({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>Generate Code QR</Button>
      <BasicModal open={open} handleClose={handleClose} data={data} />
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Box, Typography, Modal, Grid } from "@mui/material";
import QRCode from "react-qr-code";
import moment from "moment";
import theme from "./style";

export default function BasicModal({ open, handleClose, data }) {
  const [dataString, setDataString] = useState("");

  useEffect(() => {
    console.log(data);
    var stringData = "";
    if (data.length > 0) {
      data.map((val) => {
        stringData =
          stringData +
          "| nombre: " +
          val.name +
          ", dni: " +
          val.dni +
          ", supplier: " +
          val.supplier +
          ", dateInit: " +
          moment(val.dateInit).format("DD-MM-YYY HH:mm") +
          ", dateEnd: " +
          moment(val.dateEnd).format("DD-MM-YYY HH:mm") +
          ", note: " +
          val.note;
      });
    }

    console.log(stringData);
    setDataString(stringData);
  }, [data]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-descripcion"
    >
      <Box sx={theme.box}>
        <Grid container spacing={2} style={theme.container}>
          <Grid item xs={12} style={theme.title}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              QR Code
            </Typography>
          </Grid>
          <Grid item xs={12} style={theme.qrCode}>
            <QRCode value={dataString} />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

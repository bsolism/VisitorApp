import React from "react";
import { Grid } from "@mui/material";

import theme from "./styles";

export default function Body({ children }) {
  return (
    <Grid container spacing={2} style={theme.body}>
      {children}
    </Grid>
  );
}

import React, { useState } from "react";
import { Grid } from "@mui/material";
import MainLayout from "../../layout/mainLayout";
import Body from "../../components/body";
import FormVisitor from "../../components/form/formVisitor";
import Table from "../../components/table";
import QrButton from "../../components/form/QrButton";

import theme from "./styles";

export default function Home() {
  const [data, setData] = useState([]);
  const [valueForm, setValueForm] = useState(null);

  return (
    <MainLayout>
      <Body>
        <Grid item xs={5} style={theme.contentCard}>
          <Grid item style={theme.card}>
            <FormVisitor data={data} setData={setData} valueForm={valueForm} />
          </Grid>
        </Grid>
        <Grid item xs={5} style={theme.contentCard}>
          <Grid item style={theme.card}>
            <Table data={data} height="80%" setValueForm={setValueForm} />
            <QrButton data={data} />
          </Grid>
        </Grid>
      </Body>
    </MainLayout>
  );
}

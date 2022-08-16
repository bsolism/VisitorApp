import React, { useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Form from "../formik";
import FieldText from "../field/fieldText";
import FieldDatePicker from "../field/datePicker";
import SubmitButton from "../submitButton";
import * as Yup from "yup";

const initialValues = {
  id: 0,
  name: "",
  dni: "",
  supplier: "",
  note: "",
  dateInit: "",
  dateEnd: "",
};

const validation = Yup.object().shape({
  name: Yup.string().required("Name Required").min(1).label("Name"),
  dni: Yup.string().required().label("DNI"),
  supplier: Yup.string().required().label("Supplier"),
  note: Yup.string().required("note").min(1).label("Note"),
  dateInit: Yup.string().required().label("Date Time"),
  dateEnd: Yup.string().required().label("Date Time"),
});

export default function FormVisitor({ data, setData, valueForm }) {
  const ref = useRef(null);
  useEffect(() => {
    if (valueForm !== null) {
      ref.current.setFieldValue("id", valueForm.id);
      ref.current.setFieldValue("name", valueForm.name);
      ref.current.setFieldValue("dni", valueForm.dni);
      ref.current.setFieldValue("supplier", valueForm.supplier);
      ref.current.setFieldValue("note", valueForm.note);
      ref.current.setFieldValue("dateInit", valueForm.dateInit);
      ref.current.setFieldValue("dateEnd", valueForm.dateEnd);
    }
  }, [valueForm]);

  const onSubmit = (values, { resetForm }) => {
    var dat = values;
    const dataExist = data.filter((x) => x.dni === values.dni);
    if (dataExist.length === 0) {
      dat.id = data.length + 1;
      setData((data) => [...data, dat]);
      resetForm();
    } else {
      if (data.length > 0) {
        data.map((value, index) => {
          if (value.id === values.id) {
            let newArr = [...data];
            newArr[index] = values;
            setData(newArr);
          }
        });
      }
    }
  };
  return (
    <Grid container spacing={1}>
      <Form
        innerRef={ref}
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        <Grid item xs={12}>
          <Typography component="h4" variant="h6" align="center">
            Agregar Visita
          </Typography>
          <FieldText required={true} name="name" label="Name" />
          <FieldText required={true} name="dni" label="DNI" />
          <FieldText required={true} name="supplier" label="Supplier" />
          <FieldDatePicker id="dateInit" label="Fecha Inicio" />
          <FieldDatePicker id="dateEnd" label="Fecha Final" />
          <FieldText required={true} name="note" label="Note" />
          <SubmitButton title="Save" />
        </Grid>
      </Form>
    </Grid>
  );
}

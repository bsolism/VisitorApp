import React from "react";
import { FormControlLabel, FormGroup } from "@mui/material";
import { ErrorMessage } from "formik";
import Text from "./text";

export default function FieldText({ name, label, type, ...props }) {
  return (
    <FormGroup className="form-group">
      <FormControlLabel
        control={<Text name={name} label={label} type={type} {...props} />}
        label=""
        labelPlacement="start"
      />
      <ErrorMessage name={name} component="div" />
    </FormGroup>
  );
}

import React from "react";
import TextField from "@mui/material/TextField";
import { useFormikContext } from "formik";

export default function Text({ name, label, type, ...props }) {
  const { setFieldValue, values } = useFormikContext();

  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
  };
  return (
    <TextField
      type={type}
      id={name}
      name={name}
      label={label}
      fullWidth
      variant="standard"
      onChange={(e) => handleChange(e)}
      value={values[name]}
      inputProps={{ style: { fontSize: 12 } }}
      {...props}
    />
  );
}

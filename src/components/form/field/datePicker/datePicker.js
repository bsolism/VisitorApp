import React, { useState } from "react";
import { FormControlLabel, FormGroup, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useFormikContext } from "formik";
import FieldText from "../fieldText";
import "./style.css";

export default function FieldDatePicker({ id, label }) {
  const [value, setValue] = useState(null);
  const { setFieldValue, values } = useFormikContext();

  const handleChange = (val) => {
    setValue(val);
    setFieldValue(id, val);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label={label}
        value={value}
        onChange={(val) => handleChange(val)}
        renderInput={(params) => (
          <TextField
            variant="standard"
            sx={{ ml: 2, mr: 2, width: "98%" }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}

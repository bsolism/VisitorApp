import React from "react";
import { Formik } from "formik";

export default function Form({
  innerRef,
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <Formik
      innerRef={innerRef}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

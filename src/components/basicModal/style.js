import createStyles from "@mui/styles/createStyles";

const theme = createStyles({
  box: {
    position: "absolute",
    //display: "flex",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: "400px",
    // height: "300px",
    //overflow: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  },
  container: {
    height: "330px",
    width: "500px",
  },
  shared: {
    height: "300px",
  },
  title: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  qrCode: {
    display: "flex",
    width: "80%",

    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default theme;

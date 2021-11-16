import { makeStyles } from "@material-ui/core";
import bgimg from "./bgImg.jpg";

const useStyles = makeStyles(() => ({
  imageWrapper: {
    backgroundImage: `url(${bgimg})`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "round",
    backgroundSize: "cover",
  },
  containerStyle: {
    padding: " 20px 5%",
    maxWidth: "100%",
    marginTop: "-20px",
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  aboutUsTextWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    paddingRight: "5%",
    color: " #DCDCDC",
  },
  textStyle: {
    fontSize: "28px",
    textAlign: "left",
    fontWeight: "300",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  adaptiveContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  counterWrapper: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "300",
    width: "25%",
  },
  adaptiveCounterWrapper: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "300",
    alignItems: "center",
  },
  counterStyle: {
    color: "#3ec0dd",
    width: "8.8rem",
  },
  counterParagraph: {
    fontSize: "20px",
    width: "90%",
    color: " #DCDCDC",
    fontWeight: "300",
  },
}));

export default useStyles;

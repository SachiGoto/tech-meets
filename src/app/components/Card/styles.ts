import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  root: { color: theme.colorScheme === "dark" ? theme.white : theme.black },

  eventCard: {
    position: "relative",
    width: "80vw",
    height: "auto",
    maxWidth: "43rem",
    minWidth: "15rem",
    borderRadius: "2.5rem",
    marginBottom: "3%",
    transition: "all 0.2s ease-out",
    boxShadow: "rgba(0, 0, 0, 0.15) 0 5px 5px",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : "black"
    }`,

    [`@media (max-width: 768px)`]: {
      width: "90%",
    },

    "&::before": {
      content: '""',
      borderRadius: "2.5rem",
      position: "absolute",
      width: "100%",
      height: "100%",
      marginTop: "-4px",
      marginLeft: "4px",
      transition: "all 0.2s ease-out",

      border: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.blue[1] : "black"
      }`,
    },

    "&:hover::before": {
      marginTop: "5px",
      marginLeft: "10px",
      background: "rgba(255,255,255,0.5)",
    },
  },

  inner: {
    padding: "30px 20px",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  innerContainer: {
    width: "50%",
    position: "relative",
    [`@media (max-width: 768px)`]: {
      width: "90%",
    },
  },

  btn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  trashIcon: {
    position: "absolute",
    bottom: "10px",
    right: "20px",
    borderRadius: "50%",
    boxShadow: "1px 1px 2px 1px #ABABAB",
    backgroundColor: "white",
    fill: "grey",
    opacity: "1",
    width: "1.3rem",
    height: "1.3rem",

    "&:hover": {
      fill: "rgb(41,50,64)",
    },
  },
}));

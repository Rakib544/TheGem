import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
      color: 'black',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color: 'black'
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    color: '#fff',
    backgroundColor: 'red',
    height: '35px',
    width: '90px',
    margin: '7px 7px',
    borderRadius: '15px',
    "&:hover": {
      backgroundColor: "red"
  }
  }
}));
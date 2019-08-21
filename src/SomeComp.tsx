import * as React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export const SomeComp = () => {
  const classes= useStyles()
  return (
    <>
      <div>Hello from child</div>
      
      <Button variant="contained" className={classes.button}>
        Search
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        details
      </Button>
      <Button size={'small'}  color="secondary" className={classes.button}>
        observations
      </Button>
      <Button size={'large'} variant="contained" color="secondary" disabled className={classes.button}>
        exit
      </Button>
    </>
  );
};

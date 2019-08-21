import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple, grey } from "@material-ui/core/colors";
// import Divider from '@material-ui/core/Divider';
import Paper from "@material-ui/core/Paper";

const radius = 75;
const useStyles = makeStyles({
  orangeAvatar: {
    // margin: 10,
    color: "#fff",
    width: radius,
    height: radius,
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    // margin: 10,
    color: "#fff",
    width: radius,
    height: radius,
    backgroundColor: deepPurple[500]
  },
  windText: {
    color: grey[800],
    fontWeight: 300
  }
});

export const ObservationCard = (props: { id: number }) => {
  let classes = useStyles();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.target)
    console.log(props.id)
    // window.alert(props.id);
  };
  return (
    <div>
      <Paper
        style={{ marginTop: "10px", marginLeft: "2%", marginRight: "2%" }}
      >
        <div className="boxTwo" onClick={(e)=>handleClick(e)}>
          <div className="column1">
            <Avatar className={classes.orangeAvatar}>15</Avatar>
          </div>

          <div className="column2">
            <Typography style={{ marginTop: 10 }} variant="h6">
              Point Perpendicular
            </Typography>
            {/* <div style={{marginTop: 15, fontWeight: 400, fontSize: 20}}>Point Perpendicular</div> */}
            <Typography
              style={{ marginTop: 10 }}
              variant="subtitle1"
              className={classes.windText}
            >
              13 to 15 WNW
            </Typography>
          </div>
          <div className="column1">
            <Avatar className={classes.purpleAvatar}>20 c</Avatar>
          </div>
        </div>
      </Paper>
    </div>
  );
};

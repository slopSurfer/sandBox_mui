import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
// import Paper from "@material-ui/core/Paper";
import { red } from "@material-ui/core/colors";
// import TagFacesIcon from '@material-ui/icons/TagFacesIcon';

interface ChipData {
  key: number;
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      padding: theme.spacing(0.5)
    },
    chip: {
      margin: theme.spacing(0.5)
    }
  })
);

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData] = React.useState<ChipData[]>([
    { key: 0, label: "Sydney" },
    { key: 1, label: "Sydney West" },
    { key: 2, label: "Illawarra" },
    { key: 3, label: "South Coast NSW" },
    { key: 4, label: "Snow" },
    { key: 5, label: "Mid North Coast" },
    { key: 6, label: "North Coast" },
    { key: 7, label: "Gold Coast" },
    { key: 8, label: "Brisbane" },
    { key: 9, label: "Central" }
  ]);

  let selectId = 1
  let backColor = 'seconday'
  const handleClick = (data: ChipData, e: any) => {
    console.log(data);
    selectId = data.key
    // window.alert(e.target);
    // e.target.backgroundColor = red[500];
    console.log(e.target);
  };

  function setColor(props: ChipData): any {
    if (props.key === selectId) {      
      return "primary";
    } else {
      return "seconday";
    }
  }

  return (
    <>
      {chipData.map((data: ChipData) => {
        return (
          <Chip
            key={data.key}
            // icon={icon}
            label={data.label}
            clickable={true}
            onClick={e => handleClick(data, e)}
            // onDelete={handleDelete(data)}
            // color={backColor}
            // variant="outlined"
            className={classes.chip}
          />
        );
      })}
    </>
  );
}

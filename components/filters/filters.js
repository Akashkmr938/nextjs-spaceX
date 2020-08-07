import React from "react";
import { Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const yearArray = [
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];

const booleanArray = ["true", "false"];

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    position: "sticky",
    top: 0,
    color: "darkslategrey",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  root: {
    minWidth: "80%",
    height: "fit-content",
  },
  content: {
    textAlign: "center",
    color: "darkslategrey",
  },
  buttonContainer: {
    display: "inline-grid",
    "grid-template-columns": "auto auto",
  },
  btn: {
    margin: "10px",
    backgroundColor: "rgb(154,205,50,0.6);",
    fontWeight: "bold",
  },
  line: {
    width: "80%",
  },
}));

const Filters = (props) => {
  const classes = useStyles();

  const pressedYearColor = (year) => {
    return props.pressedButton.year === year ? "green" : "rgb(154,205,50,0.6)";
  };
  const pressedLaunchColor = (launch) => {
    return props.pressedButton.launch === launch
      ? "green"
      : "rgb(154,205,50,0.6)";
  };
  const pressedLandColor = (land) => {
    return props.pressedButton.land === land ? "green" : "rgb(154,205,50,0.6)";
  };

  return (
    <div className={classes.filterContainer}>
      <Paper className={classes.root} elevation={3}>
        <div className={classes.content}>
          <h2>Filters</h2>
          <h3>Launch Year</h3>
          <hr className={classes.line} />
          <div className={classes.buttonContainer}>
            {yearArray.map((year, index) => (
              <Button
                className={classes.btn}
                key={year}
                onClick={() => props.handleYearClick(year)}
                variant="contained"
                style={{
                  backgroundColor: pressedYearColor(year),
                }}
              >
                {year}
              </Button>
            ))}
          </div>
          <h3>Successful Launch</h3>
          <hr className={classes.line} />
          <div className={classes.buttonContainer}>
            {booleanArray.map((boolean, index) => (
              <Button
                className={classes.btn}
                key={index}
                variant="contained"
                onClick={() => props.handleLaunchClick(boolean)}
                style={{
                  backgroundColor: pressedLaunchColor(boolean),
                }}
              >
                {boolean}
              </Button>
            ))}
          </div>
          <h3>Successful Landing</h3>
          <hr className={classes.line} />
          <div className={classes.buttonContainer}>
            {booleanArray.map((boolean, index) => (
              <Button
                className={classes.btn}
                key={index}
                variant="contained"
                onClick={() => props.handleLandClick(boolean)}
                style={{
                  backgroundColor: pressedLandColor(boolean),
                }}
              >
                {boolean}
              </Button>
            ))}
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Filters;

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
  },
  buttonContainer: {
    display: "inline-grid",
    "grid-template-columns": "auto auto",
  },
  btn: {
    margin: "10px",
    backgroundColor: "rgb(154,205,50,0.6);",
  },
  line: {
    width: "80%",
  },
}));

const Filters = (props) => {
  const classes = useStyles();
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

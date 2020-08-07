import React from "react";
import Card from "../card/card";
import Grid from "@material-ui/core/Grid";
import Filters from "../filters/filters";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    flexGrow: "1",
  },
  paper: {
    textAlign: "center",
  },
  mainContainer: {
    display: "flex",
  },
  filterContainer: {
    minWidth: "30%",
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.filterContainer}>
        <Filters />
      </div>
      <div className={classes.gridContainer}>
        <Grid container spacing={4}>
          {props.shuttleArray.map((shuttle) => (
            <Grid item xs={12} sm={6} lg={3} key={shuttle.flight_number}>
              <Card {...shuttle} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import Card from "../card/card";
import Grid from "@material-ui/core/Grid";
import Filters from "../filters/filters";
import { makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const handleYearClick = (year) => {
    props.handleYearClick(year);
    router.push(`/?year=${year}`, undefined, {
      shallow: true,
    });
  };
  const handleLaunchClick = (boolean) => {
    props.handleLaunchClick(boolean);
    router.push(`/?launch=${boolean}`, undefined, {
      shallow: true,
    });
  };
  const handleLandClick = (boolean) => {
    props.handleLandClick(boolean);
    router.push(`/?land=${boolean}`, undefined, {
      shallow: true,
    });
  };
  return (
    <div className={classes.mainContainer}>
      <div className={classes.filterContainer}>
        <Filters
          handleYearClick={handleYearClick}
          handleLaunchClick={handleLaunchClick}
          handleLandClick={handleLandClick}
        />
      </div>
      <div className={classes.gridContainer}>
        <Grid container spacing={4}>
          {props.shuttleArray.length ? (
            props.shuttleArray.map((shuttle) => (
              <Grid item xs={12} sm={6} lg={3} key={shuttle.flight_number}>
                <Card {...shuttle} />
              </Grid>
            ))
          ) : (
            <h1>No results To Display</h1>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;

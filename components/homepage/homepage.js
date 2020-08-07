import React, { useState, useEffect } from "react";
import Card from "../card/card";
import Grid from "@material-ui/core/Grid";
import Filters from "../filters/filters";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  gridContainer: {
    flexGrow: "1",
  },
  paper: {
    textAlign: "center",
  },
  mainContainer: {
    display: (matches) => (matches ? "flex" : "block"),
  },
  filterContainer: {
    minWidth: "30%",
  },
  card: {
    backgroundColor: "white",
  },
});

const HomePage = (props) => {
  const matches = useMediaQuery("(min-width:850px)");
  const classes = useStyles(matches);
  const router = useRouter();
  const [pressedButton, setPressedButton] = useState({
    year: null,
    launch: null,
    land: null,
  });

  useEffect(() => {
    if (router.query.year) {
      setPressedButton({
        year: router.query.year,
        launch: null,
        land: null,
      });
    } else if (router.query.launch) {
      setPressedButton({
        year: null,
        launch: router.query.launch,
        land: null,
      });
    } else if (router.query.land) {
      setPressedButton({
        year: null,
        launch: null,
        land: router.query.land,
      });
    }
  }, []);

  const handleYearClick = (year) => {
    props.handleYearClick(year);
    router.push(`/?year=${year}`, undefined, {
      shallow: true,
    });
    setPressedButton({
      year: year,
      launch: null,
      land: null,
    });
  };
  const handleLaunchClick = (boolean) => {
    props.handleLaunchClick(boolean);
    router.push(`/?launch=${boolean}`, undefined, {
      shallow: true,
    });
    setPressedButton({
      year: null,
      launch: boolean,
      land: null,
    });
  };
  const handleLandClick = (boolean) => {
    props.handleLandClick(boolean);
    router.push(`/?land=${boolean}`, undefined, {
      shallow: true,
    });
    setPressedButton({
      year: null,
      launch: null,
      land: boolean,
    });
  };
  return (
    <div className={classes.mainContainer}>
      <div className={classes.filterContainer}>
        <Filters
          handleYearClick={handleYearClick}
          handleLaunchClick={handleLaunchClick}
          handleLandClick={handleLandClick}
          pressedButton={pressedButton}
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
            <h1 style={{ justifyContent: "center" }}>No results To Display</h1>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;

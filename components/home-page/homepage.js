import React from "react";
import Card from "../card/card";
import Grid from "@material-ui/core/Grid";
import styles from "./homepage.module.css";

const HomePage = (props) => {
  return (
    <div className={styles.root}>
      <Grid container spacing={4}>
        {props.shuttleArray.map((shuttle) => (
          <Grid item xs={12} sm={6} lg={3} key={shuttle.flight_number}>
            <Card {...shuttle} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;

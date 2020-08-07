import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
  },

  "card:hover": {
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
  },
  container: {
    padding: "2px 16px",
  },
}));

const Card = (props) => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.card}>
        <img
          //   src={props.links.mission_patch}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div className={styles.container}>
          <h4>
            <b>
              {props.mission_name} # {props.flight_number}
            </b>
          </h4>
          <p>Mission Ids: </p>
          {props.mission_id.length > 0 &&
            props.mission_id.map((mission, index) => (
              <li key={index}>{mission}</li>
            ))}

          <h4>Launch Year: {props.launch_year}</h4>
          <h4>Successful Launch: {String(props.launch_success)}</h4>
          <h4>Successful Landing: {String(props.tbd)}</h4>
        </div>
      </div>
    </>
  );
};

export default Card;

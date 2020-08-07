import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
    backgroundColor: "white",
    borderRadius: "5px",
  },

  "card:hover": {
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
  },
  container: {
    padding: "2px 16px",
  },
  image: {
    width: "100%",
  },
  heading: {
    color: "indigo",
    fontSize: "18px",
  },
  imgContainer: {
    padding: "15px",
  },
}));

const Card = (props) => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img
            //   src={props.links.mission_patch}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            alt="Avatar"
            className={styles.image}
          />
        </div>
        <div className={styles.container}>
          <h4 className={styles.heading}>
            {props.mission_name} #{props.flight_number}
          </h4>
          <h4>Mission Ids: </h4>
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

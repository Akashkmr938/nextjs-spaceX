import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  return (
    <>
      <div className={styles.card}>
        <img
          //   src={props.links.mission_patch}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div className={styles.container}>
          <h4>
            <b>
              {props.mission_name} # {props.flight_number}
            </b>
          </h4>
          {props.mission_id.length > 0 && (
            <p>
              Mission Ids:{" "}
              {props.mission_id.map((mission, index) => (
                <li key={index}>{mission}</li>
              ))}
            </p>
          )}

          <h4>Launch Year: {props.launch_year}</h4>
          <h4>Successfull Launch: {String(props.launch_success)}</h4>
          <h4>Successfull Landing: {String(props.tbd)}</h4>
        </div>
      </div>
    </>
  );
};

export default Card;

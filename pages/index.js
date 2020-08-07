import HomePage from "../components/homepage/homepage";
import { wrapper } from "../store/store";
import Axios from "axios";
import { connect } from "react-redux";
/**
 * This is the HomePage wrapper component.
 */
const Index = (props) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>SpaceX Launch Programs</h1>
      <HomePage
        {...props}
        handleYearClick={(year) => handleYearClick(year, props)}
        handleLaunchClick={(boolean) => handleLaunchClick(boolean, props)}
        handleLandClick={(boolean) => handleLandClick(boolean, props)}
      />
      <h2 style={{ textAlign: "center" }}>Developed By : Akash Kumar</h2>
    </>
  );
};
export default connect((state) => state)(Index);
/**
 * Calling APi from server side and feeding the response to homepage component.
 */
export const getServerSideProps = wrapper.getServerSideProps((context) => {
  if (context.query.year) {
    return handleYearClick(context.query.year, context.store);
  } else if (context.query.launch) {
    return handleLaunchClick(context.query.launch, context.store);
  } else if (context.query.land) {
    return handleLaunchClick(context.query.land, context.store);
  } else {
    return Axios.get(`https://api.spaceXdata.com/v3/launches?limit=10`)
      .then((response) => {
        context.store.dispatch({
          type: "LAUNCHES_LIMIT_100",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Something went Wrong--->", error);
      });
  }
});

const handleYearClick = (year, props) => {
  return Axios.get(
    `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`
  ).then((response) => {
    props.dispatch({
      type: "LAUNCHES_LIMIT_100",
      payload: response.data,
    });
  });
};
const handleLaunchClick = (boolean, props) => {
  return Axios.get(
    `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${boolean}`
  ).then((response) => {
    props.dispatch({
      type: "LAUNCHES_LIMIT_100",
      payload: response.data,
    });
  });
};
const handleLandClick = (boolean, props) => {
  return Axios.get(
    `https://api.spacexdata.com/v3/launches?limit=100&land_success=${boolean}`
  ).then((response) => {
    props.dispatch({
      type: "LAUNCHES_LIMIT_100",
      payload: response.data,
    });
  });
};

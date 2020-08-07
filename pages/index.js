import HomePage from "../components/homepage/homepage";
import { wrapper } from "../store/store";
import Axios from "axios";
import { connect } from "react-redux";
/**
 * This is the Home page wrapper component.
 */
const Index = (props) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>SpaceX Launch Programs</h1>
      <HomePage {...props} />
    </>
  );
};
export default connect((state) => state)(Index);

/**
 * Calling APi from server side and feeding the response to Navigation page component.
 * The page is accessible using "/navigation" route.
 */
export const getServerSideProps = wrapper.getServerSideProps(({ store }) => {
  return Axios.get(`https://api.spaceXdata.com/v3/launches?limit=10`)
    .then((response) => {
      store.dispatch({
        type: "LAUNCHES_LIMIT_100",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log("Something went Wrong--->", error);
    });
});

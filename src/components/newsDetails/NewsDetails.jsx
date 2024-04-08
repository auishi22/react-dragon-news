import PropTypes from "prop-types";
import Header from "../../pages/shared/Header";
import RightSideNav from "../../pages/shared/RightSideNav";
import { useParams } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl">News Details</h2>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

NewsDetails.propTypes = {};

export default NewsDetails;

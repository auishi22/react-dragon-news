import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-gray-100 p-3 mt-8">
      <button className="btn bg-red-400">Latest News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-2">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-2">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-2">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;

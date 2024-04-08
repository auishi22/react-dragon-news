import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-8 space-y-2 border">
        <h2 className="text-2xl text-center mb-4">Login With</h2>

        <button className="btn btn-outline w-full text-lg text-blue-700">
          <FaGoogle></FaGoogle>Login with Google
        </button>
        <button className="btn btn-outline w-full text-lg">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
      <div className="p-8  border mt-8">
        <h2 className="text-2xl text-center mb-4">Find Us On</h2>

        <a
          className="flex items-center gap-4 text-lg border rounded-t-lg p-4"
          href="">
          <FaFacebook></FaFacebook> Facebook
        </a>
        <a className="flex items-center gap-4 text-lg border-x  p-4" href="">
          <FaTwitter></FaTwitter> Twitter
        </a>
        <a
          className="flex items-center gap-4 text-lg border rounded-b-lg p-4"
          href="">
          <FaInstagram></FaInstagram> Instagram
        </a>
      </div>
      <div className="p-8 space-y-2 border my-8 bg-gray-50">
        <h2 className="text-2xl text-center mb-4">Q-Zone</h2>

        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;

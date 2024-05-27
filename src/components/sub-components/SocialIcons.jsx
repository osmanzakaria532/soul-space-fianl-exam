import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Link>
          <div className="border border-[#9CA3AF] rounded-full p-2">
            <FaFacebook className="text-2xl text-[#9CA3AF]" />
          </div>
        </Link>
        <Link>
          <div className="border border-[#9CA3AF] rounded-full p-2">
            <FaInstagram className="text-2xl text-[#9CA3AF]" />
          </div>
        </Link>
        <Link>
          <div className="border border-[#9CA3AF] rounded-full p-2">
            <FaYoutube className="text-2xl text-[#9CA3AF]" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SocialIcons;

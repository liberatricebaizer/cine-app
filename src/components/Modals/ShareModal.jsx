import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";
import {
  FaFacebook,
  FaPinterest,
  FaPlusCircle,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  EmailShareButton,
} from "react-share";
import { MdEmail } from "react-icons/md";
const ShareModal = ({ modalOpen, setModalOpen, movie }) => {
  const shareData = [
    { icon: FaFacebook, shareButton: FacebookShareButton },
    { icon: FaTwitter, shareButton: TwitterShareButton },
    { icon: FaTelegram, shareButton: TelegramShareButton },
    { icon: FaWhatsapp, shareButton: WhatsappShareButton },
    { icon: FaPinterest, shareButton: PinterestShareButton },
    { icon: MdEmail, shareButton: EmailShareButton },
  ];
  const url = `${window.location.protocol}//${window.location.host}/movie/${movie.name}`;
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border  rounded-2xl md:w-3/5 lg:w-2/5 w-full align-middle p-10  h-full bg-main text-white">
        <h2 className="text-2xl ">
          Share <span className="text-xl font-bold">'{movie?.name}'</span>
        </h2>
        <form className="flex-rows flex-wrap gap-6 mt-6">
          {shareData.map((data, index) => (
            <data.shareButton
              key={index}
              url={url}
              quote="Cineverse | World of Cinema"
            >
              <div className="w-12 transitions hover:bg-groon flex-colo text-lg h-12 bg-white rounded bg-opacity-30 ">
                <data.icon />
              </div>
            </data.shareButton>
          ))}
        </form>
      </div>
    </MainModal>
  );
};

export default ShareModal;

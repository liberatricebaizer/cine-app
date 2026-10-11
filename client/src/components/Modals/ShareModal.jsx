
import React, { useState } from "react";
import MainModal from "./MainModal";
import { FaFacebook, FaPinterest, FaTelegram, FaTwitter, FaWhatsapp, FaCheck, FaRegCopy } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  EmailShareButton,
} from "react-share";

const ShareModal = ({ modalOpen, setModalOpen, movie }) => {
  const [copied, setCopied] = useState(false);
  const origin = `${window.location.protocol}//${window.location.host}`;
  const url = `${origin}/movie/${encodeURIComponent(movie.name)}`;
  const text = `Watch ${movie.name} on Cineverse`;

  const networks = [
    { label: "Facebook", Icon: FaFacebook, Button: FacebookShareButton, extra: { quote: text } },
    { label: "Twitter", Icon: FaTwitter, Button: TwitterShareButton, extra: { title: text } },
    { label: "Telegram", Icon: FaTelegram, Button: TelegramShareButton, extra: { title: text } },
    { label: "WhatsApp", Icon: FaWhatsapp, Button: WhatsappShareButton, extra: { title: text } },
    { label: "Pinterest", Icon: FaPinterest, Button: PinterestShareButton, extra: { media: `${origin}/images/${movie.titleImage}`, description: text } },
    { label: "Email", Icon: MdEmail, Button: EmailShareButton, extra: { subject: text, body: movie.desc } },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the link is still selectable in the field */
    }
  };

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <h2 className="cv-display pr-12 text-2xl font-extrabold">
        Share <span className="text-[#f4b942]">{movie.name}</span>
      </h2>
      <p className="mt-2 text-sm text-[#a79fb5]">Send this movie to a friend.</p>

      <div className="mt-7 flex flex-wrap gap-3">
        {networks.map(({ label, Icon, Button, extra }) => (
          <Button key={label} url={url} htmlTitle={`Share on ${label}`} {...extra}>
            <span className="flex size-12 items-center justify-center rounded-full bg-white/10 text-lg ring-1 ring-white/10 transition hover:bg-[#f4b942] hover:text-black">
              <Icon />
            </span>
          </Button>
        ))}
      </div>

      <div className="mt-7 flex items-center gap-2 rounded-xl bg-[#0d0a12] p-2 ring-1 ring-white/10">
        <input
          readOnly
          value={url}
          aria-label="Movie link"
          onFocus={(e) => e.target.select()}
          className="min-w-0 flex-1 bg-transparent px-3 text-sm text-[#a79fb5] focus:outline-none"
        />
        <button
          type="button"
          onClick={copy}
          className="flex shrink-0 items-center gap-2 rounded-lg bg-[#f4b942] px-4 py-2.5 text-sm font-bold text-black transition hover:bg-white"
        >
          {copied ? <FaCheck /> : <FaRegCopy />} {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </MainModal>
  );
};

export default ShareModal;
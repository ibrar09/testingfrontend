import React from "react";
import {
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoTwitter,
  IoMail,
  IoCopy,
  IoShareSocialOutline,
} from "react-icons/io5";
import toast from "react-hot-toast";

const SocialShare = ({ product }) => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const text = encodeURIComponent(
    `${product?.name || product?.title || "Check this out!"}`
  );

  const shareViaNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product?.name || "Product",
          text: "Check out this amazing product!",
          url,
        });
      } catch (err) {
        // user dismissed or error
      }
    } else {
      toast("Your browser doesn't support native sharing.", { icon: "ℹ️" });
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  const openWindow = (targetUrl) => {
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      {/* Native Share */}
      <button
        onClick={shareViaNative}
        aria-label="Share"
        title="Share"
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-medium text-sm transition"
      >
        <IoShareSocialOutline className="w-5 h-5" />
        <span className="hidden sm:inline">Share</span>
      </button>

      {/* WhatsApp */}
      <button
        onClick={() =>
          openWindow(
            `https://api.whatsapp.com/send?text=${text}%20${encodeURIComponent(url)}`
          )
        }
        aria-label="WhatsApp"
        title="Share on WhatsApp"
        className="flex items-center justify-center w-10 h-10 bg-green-100 hover:bg-green-200 rounded-full transition"
      >
        <IoLogoWhatsapp className="w-5 h-5 text-green-600" />
      </button>

      {/* Facebook */}
      <button
        onClick={() =>
          openWindow(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
          )
        }
        aria-label="Facebook"
        title="Share on Facebook"
        className="flex items-center justify-center w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full transition"
      >
        <IoLogoFacebook className="w-5 h-5 text-blue-600" />
      </button>

      {/* Twitter (X) */}
      <button
        onClick={() =>
          openWindow(
            `https://twitter.com/intent/tweet?text=${text}%20${encodeURIComponent(url)}`
          )
        }
        aria-label="Twitter"
        title="Share on Twitter"
        className="flex items-center justify-center w-10 h-10 bg-sky-100 hover:bg-sky-200 rounded-full transition"
      >
        <IoLogoTwitter className="w-5 h-5 text-sky-600" />
      </button>

      {/* Email */}
      <button
        onClick={() =>
          openWindow(
            `mailto:?subject=${encodeURIComponent(
              product?.name || "Product"
            )}&body=Check out this product: ${encodeURIComponent(url)}`
          )
        }
        aria-label="Email"
        title="Share via Email"
        className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition"
      >
        <IoMail className="w-5 h-5 text-gray-700" />
      </button>

      {/* Copy link */}
      <button
        onClick={handleCopy}
        aria-label="Copy Link"
        title="Copy product link"
        className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition"
      >
        <IoCopy className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
};

export default SocialShare;

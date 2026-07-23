import mongoose from "mongoose";

const settingSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },

    tagline: {
      type: String,
      default: "",
    },

    logo: {
      type: String,
      default: "",
    },

    favicon: {
      type: String,
      default: "",
    },

    emails: [
      {
        type: String,
      },
    ],

    phones: [
      {
        type: String,
      },
    ],

    address: {
      type: String,
      default: "",
    },

    socialLinks: {
      facebook: String,
      instagram: String,
      linkedin: String,
      twitter: String,
      youtube: String,
    },

    hero: {
      badge: String,
      title: String,
      subtitle: String,
      description: String,
      primaryButton: String,
      secondaryButton: String,
    },

    footer: {
      copyright: String,
      description: String,
    },
  },
  {
    timestamps: true,
  }
);
const Setting = mongoose.model("Setting", settingSchema);
export default Setting;
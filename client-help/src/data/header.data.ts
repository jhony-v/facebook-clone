import { AiOutlineUser } from "react-icons/ai";
import { v4 } from "uuid";
export const headerTabOptionsData = [
  {
    text: "Using facebook",
    id: "using",
    options: [
      {
        icon: AiOutlineUser,
        text: "Creating an account",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Friending",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Your home page",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Messaging",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Stories",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Your photos and Videos",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Videos on Watch",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Pages",
        id: v4(),
      },

      {
        icon: AiOutlineUser,
        text: "Groups",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Events",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Facebook pay",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Marketplace",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Apps",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Facebook and apps",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Accesibility",
        id: v4(),
      },
    ],
  },
  {
    text: "Managing yout account",
    id: "account",
    options: [
      {
        icon: AiOutlineUser,
        text: "Login and password",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Your profile and settings",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Names of Facebook",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Notification",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Accesing & Downloading yout information",
        id: v4(),
      },
    ],
  },
  {
    text: "Privacity and safety",
    id: "privacity",
    options: [
      {
        icon: AiOutlineUser,
        text: "Your privacity",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Staying safe",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Keeping your acocunt secure",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Unfriending or blocking someone",
        id: v4(),
      },
    ],
  },
  {
    text: "Policies and reporting",
    id: "policies",
    options: [
      {
        icon: AiOutlineUser,
        text: "Reporting abuse",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Reporting a Problem with Facebook",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Reporting a Privacy Violation",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Hacked and Fake Accounts",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Managing a Deceased Person's Account",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "Intellectual Property",
        id: v4(),
      },
      {
        icon: AiOutlineUser,
        text: "About out polices",
        id: v4(),
      },
    ],
  },
];

export type HeaderTabsOptionDataType = typeof headerTabOptionsData;
export type HeaderTabsOptionDataItemType = typeof headerTabOptionsData[0];

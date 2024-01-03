import {
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineCamera,
  AiOutlineCalendar,
  AiOutlineAppstoreAdd,
  AiOutlineDesktop,
  AiOutlineSetting,
  AiOutlineBell,
  AiOutlineLock,
  AiOutlineCheckCircle,
  AiOutlineBug,
  AiOutlineUnlock
} from "react-icons/ai";
import { FiPlayCircle, FiFlag, FiKey, FiUserX } from "react-icons/fi";
import { IoIosInformationCircleOutline, IoMdDocument, IoMdPeople } from 'react-icons/io'
import { MdPayment, MdStore }from "react-icons/md"
import { BiUserCheck } from "react-icons/bi"
import { RiErrorWarningLine, RiShieldUserLine } from "react-icons/ri"
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa"
import {HiOutlineDocumentText } from "react-icons/hi"
import { VscSymbolFile, VscSymbolMethod } from "react-icons/vsc"

export const headerTabOptionsData = [
  {
    text: "Using facebook",
    id: "using",
    options: [
      {
        icon: FaRegUserCircle,
        text: "Creating an account",
        id: "a1",
      },
      {
        icon: AiOutlineUserAdd,
        text: "Friending",
        id: "a2",
      },
      {
        icon: AiOutlineHome,
        text: "Your home page",
        id: "a3",
      },
      {
        icon: AiOutlineMessage,
        text: "Messaging",
        id: "a4",
      },
      {
        icon: AiOutlineUser,
        text: "Stories",
        id: "a5",
      },
      {
        icon: AiOutlineCamera,
        text: "Your photos and Videos",
        id: "a6",
      },
      {
        icon: FiPlayCircle,
        text: "Videos on Watch",
        id: "a7",
      },
      {
        icon: FiFlag,
        text: "Pages",
        id: "a8",
      },

      {
        icon: IoMdPeople,
        text: "Groups",
        id: "a9",
      },
      {
        icon: AiOutlineCalendar,
        text: "Events",
        id: "a10",
      },
      {
        icon: MdPayment,
        text: "Facebook pay",
        id: "a11",
      },
      {
        icon: MdStore,
        text: "Marketplace",
        id: "a12",
      },
      {
        icon: AiOutlineAppstoreAdd,
        text: "Apps",
        id: "a13",
      },
      {
        icon: AiOutlineDesktop,
        text: "Facebook and apps",
        id: "a14",
      },
      {
        icon: BiUserCheck,
        text: "Accesibility",
        id: "a15",
      },
    ],
  },
  {
    text: "Managing yout account",
    id: "account",
    options: [
      {
        icon: FiKey,
        text: "Login and password",
        id: "a16",
      },
      {
        icon: AiOutlineSetting,
        text: "Your profile and settings",
        id: "a17",
      },
      {
        icon: IoMdDocument,
        text: "Names of Facebook",
        id: "a18",
      },
      {
        icon: AiOutlineBell,
        text: "Notification",
        id: "a19",
      },
      {
        icon: RiErrorWarningLine,
        text: "Accesing & Downloading yout information",
        id: "a20",
      },
    ],
  },
  {
    text: "Privacity and safety",
    id: "privacity",
    options: [
      {
        icon: AiOutlineLock,
        text: "Your privacity",
        id: "a21",
      },
      {
        icon: AiOutlineCheckCircle,
        text: "Staying safe",
        id: "a22",
      },
      {
        icon: BsFillShieldLockFill,
        text: "Keeping your acocunt secure",
        id: "a23",
      },
      {
        icon: RiShieldUserLine,
        text: "Unfriending or blocking someone",
        id: "a24",
      },
    ],
  },
  {
    text: "Policies and reporting",
    id: "policies",
    options: [
      {
        icon: IoIosInformationCircleOutline,
        text: "Reporting abuse",
        id: "a25",
      },
      {
        icon: AiOutlineBug,
        text: "Reporting a Problem with Facebook",
        id: "a26",
      },
      {
        icon: AiOutlineUnlock,
        text: "Reporting a Privacy Violation",
        id: "a27",
      },
      {
        icon: VscSymbolFile,
        text: "Hacked and Fake Accounts",
        id: "a28",
      },
      {
        icon: FiUserX,
        text: "Managing a Deceased Person's Account",
        id: "a29",
      },
      {
        icon: VscSymbolMethod,
        text: "Intellectual Property",
        id: "a30",
      },
      {
        icon: HiOutlineDocumentText,
        text: "About out polices",
        id: "a31",
      },
    ],
  },
];

export type HeaderTabsOptionDataType = typeof headerTabOptionsData;
export type HeaderTabsOptionDataItemType = typeof headerTabOptionsData[0];

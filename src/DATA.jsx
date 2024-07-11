import moment from "moment";

import MarkWebberAvatar from "./assets/images/avatar-mark-webber.webp";
import AngelaGrayrAvatar from "./assets/images/avatar-angela-gray.webp";
import JacobThompsonAvatar from "./assets/images/avatar-jacob-thompson.webp";
import RizkyHasanuddinAvatar from "./assets/images/avatar-rizky-hasanuddin.webp";
import KimberlySmithAvatar from "./assets/images/avatar-kimberly-smith.webp";
import NathanPetersonAvatar from "./assets/images/avatar-nathan-peterson.webp";
import AnnaKimAvatar from "./assets/images/avatar-anna-kim.webp";
import ImageChess from "./assets/images/image-chess.webp";

export default [
  {
    name: "Mark Webber",
    read: false,
    notificationType: "react",
    avatar: MarkWebberAvatar,
    postTitle: "My first tournament today!",
    postUrl: "https://www.google.com",
    notificationDateTime: moment().subtract(1, "minute").toDate(),
  },
  {
    name: "Angela Gray",
    read: false,
    notificationType: "follow",
    avatar: AngelaGrayrAvatar,
    notificationDateTime: moment().subtract(5, "minutes").toDate(),
  },
  {
    name: "Jacob Thompson",
    read: false,
    notificationType: "group-join",
    avatar: JacobThompsonAvatar,
    groupName: "Chess Club",
    postUrl: "https://chess.com",
    notificationDateTime: moment().subtract(1, "day").toDate(),
  },
  {
    name: "Rizky Hasanuddin",
    read: true,
    notificationType: "message",
    avatar: RizkyHasanuddinAvatar,
    message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
  I'm already having lots of fun and improving my game.`,
    notificationDateTime: moment().subtract(5, "days").toDate(),
  },
  {
    name: "Kimberly Smith",
    read: true,
    notificationType: "comment",
    avatar: KimberlySmithAvatar,
    picture: ImageChess,
    notificationDateTime: moment().subtract(1, "week").toDate(),
  },
  {
    name: "Nathan Peterson",
    read: true,
    notificationType: "react",
    avatar: NathanPetersonAvatar,
    postTitle: "5 end-game strategies to increase your win rate",
    postUrl: "https://react.dev",
    notificationDateTime: moment().subtract(2, "weeks").toDate(),
  },
  {
    name: "Anna Kim",
    read: true,
    notificationType: "group-left",
    avatar: AnnaKimAvatar,
    groupName: "Chess Club",
    postUrl: "https://chess.com",
    notificationDateTime: moment().subtract(2, "weeks").toDate(),
  },
];

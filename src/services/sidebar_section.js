import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import {
  History,
  KeyboardArrowDown,
  VideoLibrary,
  WatchLater,
} from "@material-ui/icons";

const primarySection = [
  {
    id: 1,
    icon: HomeIcon,
    name: "Home",
  },
  {
    id: 2,
    icon: ExploreIcon,
    name: "Home",
  },
  {
    id: 3,
    icon: SubscriptionsIcon,
    name: "Subscriptions",
  },
];

const secondarySection  = [
    {
        id: 1,
        icon: VideoLibrary,
        name: "Library",
      },
      {
        id: 2,
        icon: History,
        name: "History",
      },
      {
        id: 3,
        icon: OndemandVideoIcon,
        name: "Your Videos",
      },
      {
        id: 4,
        icon: WatchLater,
        name: "Watch Later",
      },
      {
        id: 5,
        icon: ThumbUpIcon,
        name: "Liked",
      },
      
]


const showMore = {
    icon: KeyboardArrowDown,
    name: "Show More",
  }

export { primarySection , secondarySection , showMore };

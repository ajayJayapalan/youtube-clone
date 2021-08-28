import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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

const secondarySection = [
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
];

const playListText = [
  {
    id: 1,
    name: "Lorem Ipsum Text",
  },
  {
    id: 2,
    name: "Lorem Ipsum Text",
  },
  {
    id: 3,
    name: "Lorem Ipsum Text Videos",
  },
  {
    id: 4,
    name: "Lorem Ipsum Text Later",
  },
  {
    id: 5,
    name: "Lorem Ipsum Text",
  },
];

const showMore = {
  iconDown: KeyboardArrowDown,
  iconUp: ExpandLessIcon,
  more: "Show More",
  less: "Show Less"
};

const playList = {
  icon: PlaylistPlayIcon,
  playListText,
};

export { primarySection, secondarySection, showMore, playList };

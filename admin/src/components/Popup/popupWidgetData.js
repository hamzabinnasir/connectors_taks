import { FaInstagram } from "react-icons/fa";
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
export const popupWidgetData = [
    {
        id: 1,
        headline: "Media Post",
        icon: <FaInstagram className="popWidContextIcon"/>,
        totalCounts: "1,428",
        totalPercent: "7.5%",
        rateArr: <ArrowDownwardOutlinedIcon className="popWidContextIconArrDown"/>,
        success: "Less post then usual",
        className: "red",
    },
    {
        id: 2,
        headline: "Media Post",
        icon: <TextsmsOutlinedIcon className="popWidContextIcon"/>,
        totalCounts: "11k",
        totalPercent: "34%",
        rateArr: <ArrowOutwardOutlinedIcon className="popWidContextIconArrDown"/>,
        success: "More Comments then usual",
        className: "green",
    },
    {
        id: 3,
        headline: "Avg Likes",
        icon: <ThumbUpOutlinedIcon className="popWidContextIcon"/>,
        totalCounts: "22k",
        totalPercent: "34%",
        rateArr: <ArrowOutwardOutlinedIcon className="popWidContextIconArrDown"/>,
        success: "More Likes then usual",
        className: "green",
    },
]
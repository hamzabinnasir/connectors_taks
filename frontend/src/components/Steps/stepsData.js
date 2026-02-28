import { IoDiamondOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";
const stepsData = [
    {
        id: 1,
        heading: "Step 1",
        imgSrc: <IoDiamondOutline />,
        headline: "Add Your Product",
        tagline: "Tell us what you sell and who you\nwant to reach, then hit submit",
    },
    {
        id: 2,
        heading: "Step 2",
        imgSrc: <FiFilter />,
        headline: "Fine-Tune Your\nFilters",
        tagline: "Adjust followers, country,\nlanguage, and budget to surface\nthe perfect creators"
    },
    {
        id: 3,
        heading: "Step 3",
        imgSrc: <IoRocketOutline />,
        headline: "Connect & Launch",
        tagline: "Review your curated matches,\nclick connect, and kick-off the\ncollab in minutes"
    },
]

export default stepsData
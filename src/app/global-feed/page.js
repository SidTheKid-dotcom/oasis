import GlobalFeed from "./GlobalFeed";
import PopularAccount from "../../components/global-feed/PopularAccounts";

export default function GlobalFeedPage() {
    return (
        <div className="grid grid-cols-12 overflow-x-hidden">
            {/* in this mobile screen is default and css for laptop is in md: */}
            <div className=" col-span-12 md:col-span-8 px-4 md:px-20 overflow-hidden">
                <GlobalFeed />
            </div>
            <div className="hidden md:block md:col-span-4 top-16 flex-col items-start overflow-hidden">
                <PopularAccount />
            </div>
        </div>
    );
}

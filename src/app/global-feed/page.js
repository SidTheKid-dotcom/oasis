import GlobalFeed from "./GlobalFeed";
import PopularAccount from "../../components/global-feed/PopularAccounts";

export default function GlobalFeedPage() {
    return (
        <div className="grid grid-cols-12 overflow-x-hidden">
            <div className="col-span-8 px-20 overflow-hidden">
                <GlobalFeed />
            </div>
            <div className="col-span-4 hidden md:block top-16 flex-col items-start overflow-hidden">
                <PopularAccount />
            </div>
        </div>
    );
}

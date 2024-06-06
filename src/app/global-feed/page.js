import GlobalFeed from "./GlobalFeed";
import PopularAccount from "../../components/global-feed/PopularAccounts";

export default function GlobalFeedPage() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-9 px-20">
                <GlobalFeed />
            </div>
            <div className="col-span-3 hidden md:block top-16 flex-col items-start">
                <PopularAccount />
            </div>
        </div>
    );
}

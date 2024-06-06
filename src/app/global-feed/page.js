import GlobalFeed from "./GlobalFeed";
import PopularAccount from "../../components/global-feed/PopularAccounts";

export default function GlobalFeedPage() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-9 flex justify-center">
                <GlobalFeed />
            </div>
            <div className="col-span-3 flex flex-col items-center">
                <PopularAccount />
            </div>
        </div>
    );
}

import ViewPost from "./ViewPost";

export default function ViewPostPage() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3"></div>
            <div className="col-span-6">
                <ViewPost />
            </div>
            <div className="col-span-3"></div>
        </div>
    )
}
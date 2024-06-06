import CommentBox from "./CommentBox";
import CommentFeed from "./CommentFeed";

export default function CommentSection({ postId, comments, setComments }) {

    /* const [comments, setComments] = useState([{
        id: 1,
        comment_by: {
            id: 9,
            username: "himanshu",
            profile_picture: null
        },
        comment: "YE EK PARENT COMMENT HAI",
        created_at: "2024-05-02T18:44:40.089Z",
        child_comments: [
            {
                comment: null,
                gifURL: "https://media.tenor.com/Q8BhzPnoQ5wAAAAC/omg-oh-my-god.gif",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
            {
                comment: "I am iron man",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
            {
                comment: "I am panda man",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
        ]
    },{
        id: 1,
        comment_by: {
            id: 9,
            username: "himanshu",
            profile_picture: null
        },
        comment: null,
        gifURL: "https://media.tenor.com/3GTmulPf3eUAAAAC/force-may.gif",
        created_at: "2024-05-02T18:44:40.089Z",
        child_comments: [
            {
                comment: "YE EK CHILD COMMENT HAI",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
            {
                comment: null,
                gifURL: "https://media.tenor.com/WuDNxJBDte8AAAAC/eh-meh.gif",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
            {
                comment: "I am panda man",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
        ]
    },{
        id: 1,
        comment_by: {
            id: 9,
            username: "himanshu",
            profile_picture: null
        },
        comment: null,
        gifURL: "https://media.tenor.com/r0R0N3dI3kIAAAAC/dancing-cat-dance.gif",
        created_at: "2024-05-02T18:44:40.089Z",
        child_comments: [
            {
                comment: "YE EK CHILD COMMENT HAI",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
            {
                comment: "I am iron man",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
            {
                comment: "I am panda man",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
        ]
    },
    ]); */

    return (
        <div className="w-full bg-black pixel-text text-white p-2 rounded-[10px]">
            <CommentBox postId={postId} setComments={setComments} />
            <CommentFeed comments={comments} setComments={setComments}/>
        </div>
    )
}
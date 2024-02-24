import { useForm } from "react-hook-form";
import { useGetPostByIdQuery, useGetPostsQuery, useSetPostMutation } from "../redux/features/api/baseApi";


const Feed = () => {
    // const {data: posts, isLoading, isError, error} = useGetPostsQuery();
    const {data: posts, isLoading, isError, error} = useGetPostByIdQuery(1);

    const [setPost, {data: postData}] = useSetPostMutation();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        // setPost(data);
        setPost({title: "this is a title", body: data.post, userId: 7965});
    }

    if(isLoading){
        return <p className="text-9xl text-zinc-300">Loading...</p>
    }

    if(!isLoading && isError){
        return <p className="text-9xl text-zinc-300">Something went wrong</p>
    }

    
    return (
        <div>
            <h1>Feed</h1>
            <div className="flex flex-col gap-3">
                {/* {
                    posts?.map(post =>  */}
                    <PostCard key={post.id} post={post}/>
                {/* } */}
            </div>
        </div>
    );
};

export default Feed;
import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POSTS, GET_POST_BY_TOPIC } from "../graphql/queries";
import Post from "./Post";
import { Jelly } from "@uiball/loaders";

type Props = {
  topic?: string;
};

function Feed({ topic }: Props) {
  const { loading, error, data } = useQuery(
    topic ? GET_POST_BY_TOPIC : GET_ALL_POSTS,
    topic
      ? {
          variables: {
            topic: topic,
          },
        }
      : {}
  );

  //   const { loading, error, data } = topic
  //     ? useQuery(GET_POST_BY_TOPIC, {
  //         variables: {
  //           topic: topic,
  //         },
  //       })
  //     : useQuery(GET_ALL_POSTS);

  // if (loading)
  //   return (
  //     <div className="flex w-full justify-center p-10 text-xl">
  //       <Jelly size={50} color="#FF4501" />
  //     </div>
  //   );
  // if (error) return <>{console.log(error.message)} Error: Feed.tsx</>;

  const posts: Post[] = topic ? data?.getPostListByTopic : data?.getPostList;

  return (
    <div>
      {posts?.map((post: Post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;

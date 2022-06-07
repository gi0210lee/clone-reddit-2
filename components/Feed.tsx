import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POSTS, GET_POST_BY_TOPIC } from "../graphql/queries";
import Post from "./Post";

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

  const posts: Post[] = topic ? data?.getPostListByTopic : data?.getPostList;

  return (
    <div>
      {posts && posts.map((post: Post) => <Post key={post.id} post={post} />)}
    </div>
  );
}

export default Feed;

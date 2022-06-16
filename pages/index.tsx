import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import PostBox from "../components/PostBox";
import SubredditRow from "../components/SubredditRow";
import { GET_SUBREDDIT_WITH_LIMIT } from "../graphql/queries";

const Home: NextPage = () => {
  const { loading, data } = useQuery(GET_SUBREDDIT_WITH_LIMIT, {
    variables: {
      limit: 3,
    },
  });

  const subreddits: Subreddit[] = data?.getSubredditListLimit;
  console.log(subreddits);

  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Clone Reddit 2.0</title>
      </Head>

      {/* PostBox */}
      <PostBox />

      {/* Feed */}
      <div className="flex">
        <Feed />
        {/* Sidebar */}
        <div className="sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
          <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
          <div>
            {subreddits?.map((subreddit, index) => (
              <SubredditRow
                key={subreddit.id}
                index={index}
                topic={subreddit.topic}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

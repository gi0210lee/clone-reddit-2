import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      body
      created_at
      id
      image
      subreddit_id
      title
      username
      subreddit {
        created_at
        id
        topic
      }
      comments {
        created_at
        id
        post_id
        text
        username
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_POST_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      body
      created_at
      id
      image
      subreddit_id
      title
      username
      subreddit {
        created_at
        id
        topic
      }
      comments {
        created_at
        id
        post_id
        text
        username
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;
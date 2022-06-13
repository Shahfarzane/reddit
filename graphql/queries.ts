import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditByTopic(topic: $topic) {
      created_at
      id
      topic
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      created_at
      id
      body
      title
      username
      image
      subreddit_id
      votes {
        id
        upvote
        username
        created_at
        post_id
      }
      comments {
        text
        username
        created_at
        id
        post_id
      }
      subreddit {
        id
        topic
        created_at
      }
    }
  }
`;
export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      created_at
      id
      body
      title
      username
      image
      subreddit_id
      votes {
        id
        upvote
        username
        created_at
        post_id
      }
      comments {
        text
        username
        created_at
        id
        post_id
      }
      subreddit {
        id
        topic
        created_at
      }
    }
  }
`;
export const GET_POST_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getPostListByPostId(post_id: $post_id) {
      id
      title
      image
      subreddit_id
      created_at
      username
      body
      comments {
        id
        created_at
        username
        text
        post_id
      }
      subreddit {
        id
        created_at
        topic
      }
      votes {
        id
        username
        upvote
        post_id
        created_at
      }
    }
  }
`;

export const GET_ALL_VOTES_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getVotesByPostId(post_id: $post_id) {
      created_at
      id
      post_id
      upvote
      username
    }
  }
`;
export const GET_SUBREDDITS_WITH_LIMIT = gql`
  query MyQuery($limit: Int!) {
    getSubredditListLimit(limit: $limit) {
      created_at
      id
      topic
    }
  }
`;

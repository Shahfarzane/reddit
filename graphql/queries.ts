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
export const GET_POST_BY_ID = gql`
  query MyQuery($id: ID!) {
    getPost(id: $id) {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      commentList {
        created_at
        id
        post_id
        text
        username
      }
      subreddit {
        created_at
        id
        topic
      }
      voteList {
        created_at
        id
        post_id
        upvote
        username
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

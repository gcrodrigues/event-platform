import { gql } from "@apollo/client";

export const GET_LESSONS_QUERY = gql`
  query GetLessons {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;
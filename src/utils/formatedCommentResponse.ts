import Comment from "../models/Comment";

interface Props {
  comment: Comment;
}

export const formatedCommentResponse = ({ comment }: Props) => {
  const formatedResponse = {
    id: comment.id,
    message: comment.message,
    owner: {
      id: comment.user.id,
      name: comment.user.name,
    },
  };

  return formatedResponse;
};

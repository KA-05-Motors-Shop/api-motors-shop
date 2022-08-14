import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import Comment from "../../models/Comment";

const deleteCommentService = async (id: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comment = await commentRepository.findOne({ where: { id } });

  if (!comment) throw new AppError("Comment not found", 404);

  await commentRepository.delete(comment.id);

  return;
};

export default deleteCommentService
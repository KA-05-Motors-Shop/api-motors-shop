import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import Comment from "../../models/Comment";

const getOneCommentService = async (id: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comment = await commentRepository.findOne({ where: { id } });

  if (!comment) throw new AppError("Comment not found", 404);

  return comment;
};


export default getOneCommentService
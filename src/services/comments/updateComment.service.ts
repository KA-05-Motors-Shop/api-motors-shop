import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { UpdateComment } from "../../interfaces/comments";
import Comment from "../../models/Comment";

const updateCommentService = async (data: UpdateComment, id: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comment = await commentRepository.findOne({ where: { id } });

  if (!comment) throw new AppError("Comment not found", 404);

  await commentRepository.save({
    ...data,
    id,
  });

  return { message: "Comment updated" };
};

export default updateCommentService;

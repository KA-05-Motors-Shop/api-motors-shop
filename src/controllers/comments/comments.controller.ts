import { Request, Response } from "express";
import createCommentService from "../../services/comments/createComment.service";
import deleteCommentService from "../../services/comments/deleteComment.service";
import getOneCommentService from "../../services/comments/getComment.service";
import getCommentsService from "../../services/comments/getComments.service";
import updateCommentService from "../../services/comments/updateComment.service";

class CommentController {
  static async create(req: Request, res: Response) {
    const { userId } = req.user;
    const { vehicle_id } = req.params;
    const { message } = req.body;

    const comment = await createCommentService({ message }, userId, vehicle_id);

    return res.status(201).json(comment);
  }

  static async index(req: Request, res: Response) {
    const comments = await getCommentsService();

    return res.json(comments);
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params;

    const comment = await getOneCommentService(id);

    return res.json(comment);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { message } = req.body;

    const updatedComment = await updateCommentService({ message }, id);

    return res.json(updatedComment);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteCommentService(id);

    return res.status(204).json();
  }
}

export default CommentController;

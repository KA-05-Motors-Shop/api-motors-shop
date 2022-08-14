import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import CommentController from "../controllers/comments/comments.controller";
import AuthToken from "../middlewares/isAuthToken.middleware";
import IsOwnerOfComment from "../middlewares/isOwnerOfComment.middleware";
import createCommentSchema from "../schemas/createComment.schema";

const router = Router();

export const commentRouter = () => {
  router.post(
    "/:vehicle_id",
    AuthToken,
    expressYupMiddleware({ schemaValidator: createCommentSchema }),
    CommentController.create
  );
  router.get("", CommentController.index);
  router.get("/:id", CommentController.show);
  router.patch("/:id", AuthToken, IsOwnerOfComment, CommentController.update);
  router.delete("/:id", AuthToken, IsOwnerOfComment, CommentController.delete);

  return router;
};

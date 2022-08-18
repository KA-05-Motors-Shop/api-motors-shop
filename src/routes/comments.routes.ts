import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import CommentController from "../controllers/comments/comments.controller";
import AuthToken from "../middlewares/isAuthToken.middleware";
import IsOwnerOfComment from "../middlewares/isOwnerOfComment.middleware";
import { ValidationId } from "../middlewares/validationId.middleware";
import createCommentSchema from "../schemas/createComment.schema";

const router = Router();

export const commentRouter = () => {
  router.post(
    "/:vehicle_id",
    ValidationId,
    AuthToken,
    expressYupMiddleware({ schemaValidator: createCommentSchema }),
    CommentController.create
  );
  router.get("", CommentController.index);
  router.get("/:id", ValidationId, CommentController.show);
  router.patch(
    "/:id",
    ValidationId,
    AuthToken,
    IsOwnerOfComment,
    CommentController.update
  );
  router.delete(
    "/:id",
    ValidationId,
    AuthToken,
    IsOwnerOfComment,
    CommentController.delete
  );

  return router;
};

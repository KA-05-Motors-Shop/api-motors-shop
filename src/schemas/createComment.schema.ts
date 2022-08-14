import * as yup from "yup";

const createCommentSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        message: yup.string().required("This field is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createCommentSchema;

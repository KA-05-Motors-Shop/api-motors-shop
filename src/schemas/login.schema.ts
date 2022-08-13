import * as yup from "yup";

export const loginSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        email: yup
          .string()
          .email("Invalid format email")
          .required("This field is required"),
        password: yup.string().required("This field is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

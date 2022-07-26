import * as yup from "yup";

const updateUserSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string(),
        email: yup.string().email("E-mail format invalid."),
        cel: yup.string(),
        birth_date: yup.string(),
        description: yup.string().max(500),
        password: yup.string(),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default updateUserSchema;

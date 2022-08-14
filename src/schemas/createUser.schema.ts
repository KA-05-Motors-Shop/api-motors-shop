import * as yup from "yup";

const createUserSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup
          .string()
          .email("E-mail format invalid.")
          .required("E-mail is required"),
        cpf: yup.string().required("CPF is required"),
        cel: yup.string().required("Celphone number is required"),
        birth_date: yup.string().required("Birth date is required"),
        description: yup.string().max(500).required("Description is required"),
        address: yup.object({
          cep: yup.string().required("CEP is required"),
          state: yup.string().required("State is required"),
          city: yup.string().required("City is required"),
          street: yup.string().required("Street is required"),
          number: yup.string().required("Number is required"),
          complement: yup.string(),
        }),
        password: yup.string().required("Password is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createUserSchema;

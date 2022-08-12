import * as yup from "yup";

const updateAddressSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        cep: yup.number(),
        state: yup.string(),
        city: yup.string(),
        street: yup.string(),
        number: yup.number(),
        complement: yup.string(),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default updateAddressSchema;

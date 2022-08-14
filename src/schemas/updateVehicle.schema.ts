import * as yup from "yup";

export const updateVehicleSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        title: yup.string(),
        type_of_ad: yup.string(),
        year: yup.number().min(1),
        km: yup.number(),
        price: yup.number().min(1),
        description: yup.string(),
        type_of_vehicle: yup.string(),
        cover_image: yup.string().url(),
        gallery_image: yup.string().url(),
        gallery_image2: yup.string().url(),
        gallery_image3: yup.string().url(),
        gallery_image4: yup.string().url(),
        gallery_image5: yup.string().url(),
        gallery_image6: yup.string().url(),
        published: yup.boolean()
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

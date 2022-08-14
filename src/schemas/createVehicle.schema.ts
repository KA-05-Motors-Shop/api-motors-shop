import * as yup from "yup";

export const createVehicleSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        title: yup.string().required("This field is required"),
        type_of_ad: yup.string().required("This field is required"),
        year: yup.number().min(1).required("This field is required"),
        km: yup.number().required("This field is required"),
        price: yup.number().min(1).required("This field is required"),
        description: yup.string().required("This field is required"),
        type_of_vehicle: yup.string().required("This field is required"),
        cover_image: yup.string().url().required("This field is required"),
        gallery_image: yup.string().url().required("This field is required"),
        gallery_image2: yup.string().url(),
        gallery_image3: yup.string().url(),
        gallery_image4: yup.string().url(),
        gallery_image5: yup.string().url(),
        gallery_image6: yup.string().url()
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

import Comment from "../models/Comment";
import Vehicle from "../models/Vehicle";
import { formatedCommentResponse } from "./formatedCommentResponse";

interface Props {
  vehicle: Vehicle;
  comments: Comment[];
}

export const formatedResponse = ({ vehicle, comments }: Props) => {
  const messages = comments.map((comment) => {
    if (comment.vehicle.id === vehicle.id) {
      return formatedCommentResponse({ comment });
    }
  });

  const formatedVehicle = {
    id: vehicle.id,
    title: vehicle.title,
    type_of_ad: vehicle.type_of_ad,
    type_of_vehicle: vehicle.type_of_vehicle,
    year: vehicle.year,
    km: vehicle.km,
    price: vehicle.price,
    description: vehicle.description,
    cover_image: vehicle.cover_image,
    gallery_image: vehicle.gallery_image,
    gallery_image2: vehicle.gallery_image2,
    gallery_image3: vehicle.gallery_image3,
    gallery_image4: vehicle.gallery_image4,
    gallery_image5: vehicle.gallery_image5,
    gallery_image6: vehicle.gallery_image6,
    published: vehicle.published,
    owner: {
      id: vehicle.user.id,
      name: vehicle.user.name,
      description: vehicle.user.description,
      cel: vehicle.user.cel
    },
    comments: messages.filter((message) => message != undefined),
  };

  return formatedVehicle;
};

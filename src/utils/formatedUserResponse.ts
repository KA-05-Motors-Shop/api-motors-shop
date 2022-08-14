import User from "../models/User";

interface Props {
  user: User;
}

export const formatedUserResponse = ({ user }: Props) => {
  const formatedResponse = {
    id: user.id,
    name: user.name,
    email: user.email,
    cpf: user.cpf,
    cel: user.cel,
    birth_date: user.birth_date,
    description: user.description,
    account_type: user.account_type,
    address: {
      id: user.address.id,
      cep: user.address.cep,
      state: user.address.state,
      city: user.address.city,
      street: user.address.street,
      number: user.address.number,
      complement: user.address.complement,
    },
    vehicles: user.vehicles.map((vehicle) => {
      return {
        id: vehicle.id,
        title: vehicle.title,
        type_of_ad: vehicle.type_of_ad,
        year: vehicle.year,
        km: vehicle.km,
        price: vehicle.price,
        description: vehicle.description,
        type_of_vehicle: vehicle.type_of_vehicle,
        cover_image: vehicle.cover_image,
        gallery_image: vehicle.gallery_image,
        gallery_image2: vehicle.gallery_image2,
        gallery_image3: vehicle.gallery_image3,
        gallery_image4: vehicle.gallery_image4,
        gallery_image5: vehicle.gallery_image5,
        gallery_image6: vehicle.gallery_image6,
        published: vehicle.published,
      };
    }),
    my_comments: user.comments.map((comment) => {
      return {
        id: comment.id,
        message: comment.message,
        created_at: comment.created_at,
      };
    }),
  };

  return formatedResponse;
};

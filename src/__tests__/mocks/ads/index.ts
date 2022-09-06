import { VehicleProps, VehicleUpdateProps } from "../../../interfaces/vehicles";

export const mockedAd1: VehicleProps = {
  title: "Anuncio teste",
  description: "Descrição teste",
  price: 20000,
  km: 10000,
  year: 2001,
  type_of_ad: "Anuncio",
  type_of_vehicle: "Carro",
  cover_image:
    "https://www.agoramotor.com.br/wp-content/uploads/2022/04/GLE-Coupe-2022-lateral-2-1024x576.jpg",
  gallery_image:
    "https://image1.mobiauto.com.br/images/api/images/v1.0/6164428/transform/fl_progressive,f_jpg,q_50,w_700",
};

export const mockedAd2: VehicleProps = {
  title: "Anuncio teste 2",
  description: "Descrição teste 2",
  price: 50000,
  km: 1000,
  year: 2022,
  type_of_ad: "Leilão",
  type_of_vehicle: "Moto",
  cover_image:
    "https://www.agoramotor.com.br/wp-content/uploads/2022/04/GLE-Coupe-2022-lateral-2-1024x576.jpg",
  gallery_image:
    "https://image1.mobiauto.com.br/images/api/images/v1.0/6164428/transform/fl_progressive,f_jpg,q_50,w_700",
};

export const mockedAdFailed: VehicleProps = {
  title: "Anuncio teste",
  description: "Descrição teste 2",
  price: 50000,
  km: 1000,
  year: 2022,
  type_of_ad: "Leilão",
  type_of_vehicle: "Moto",
  cover_image:
    "https://www.agoramotor.com.br/wp-content/uploads/2022/04/GLE-Coupe-2022-lateral-2-1024x576.jpg",
  gallery_image:
    "https://image1.mobiauto.com.br/images/api/images/v1.0/6164428/transform/fl_progressive,f_jpg,q_50,w_700",
};

export const mockedAdUpdated: VehicleUpdateProps = {
  gallery_image2:
    "https://image1.mobiauto.com.br/images/api/images/v1.0/6164428/transform/fl_progressive,f_jpg,q_50,w_700",
};

type IChoice = {
  id: number;
  imgUrl: string;
  title: string;
  summary: string;
};

type IProductImage = {
  id: number;
  imgUrl: string;
};

type IReviewCard = {
  id: number;
  title: string;
  body: string;
  dpUrl: string;
};

export { IChoice, IProductImage, IReviewCard };

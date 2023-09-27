import { IChoice, IProductImage, IReviewCard } from 'src/types';

export const choices: IChoice[] = [
  {
    id: 1,
    imgUrl: '../assets/prof-icon.svg',
    title: 'Professionalism',
    summary: 'We deliver the final work with great professional way.',
  },
  {
    id: 2,
    imgUrl: '../assets/smooth-icon.svg',
    title: 'Smooth workflow',
    summary: 'We provide the most easy smoth workflow of interior design.',
  },
  {
    id: 3,
    imgUrl: '../assets/trusted-icon.svg',
    title: 'Trusted Platform',
    summary: 'People trust us since we openend the company',
  },
  {
    id: 4,
    imgUrl: '../assets/qualified-icon.svg',
    title: 'Qualified employee',
    summary: 'Our employees are the best of the field from the city',
  },
];

export const productsImg: IProductImage[] = [
  {
    id: 1,
    imgUrl: '../assets/product-1.png',
  },
  {
    id: 2,
    imgUrl: '../assets/product-2.png',
  },
  {
    id: 3,
    imgUrl: '../assets/product-3.png',
  },
  {
    id: 4,
    imgUrl: '../assets/product-4.png',
  },
];

export const testimonials: IReviewCard[] = [
  {
    id: 1,
    title: 'Best planning service',
    body: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.',
    dpUrl: '../assets/profile-pic-1.svg',
  },
  {
    id: 2,
    title: 'Flexible and reliable',
    body: 'Terrific work from beginning to end can work any angle from minimal help to complete project handling professional without a doubt!  Love!',
    dpUrl: '../assets/profile-pic-2.svg',
  },
  {
    id: 3,
    title: 'solution innovative',
    body: '"I loved working with Darla shady rhymes for about 2 years and highly recommend anyone looking for an interior designer agency who brings creativity but designs something that fits YOU and your style.',
    dpUrl: '../assets/profile-pic-3.svg',
  },
];

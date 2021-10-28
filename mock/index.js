import React from 'react';
import Image from 'next/image';
import { SiJavascript, SiElixir } from 'react-icons/si';
import { FaMoneyBill } from 'react-icons/fa';

export const learnCards = [
  {
    isHot: false,
    title: 'Elixir course',
    type: 'Programming',
    actionTitle: 'Learn',
    descriptionTitle1: 'People',
    descriptionTitle2: 'Tokens',
    descriptionTitle3: 'Difficulty',
    descriptionTitle4: 'Cold',
    descriptionContent1: 6,
    descriptionContent2: 8,
    descriptionContent3: 'Hard',
    backgroundImage: '23622.jpg',
    icon: <SiElixir />,
  },
  {
    isHot: true,
    icon: <SiJavascript />,
    title: 'Javascript course',
    type: 'Programming',
    actionTitle: 'Learn',
    descriptionTitle1: 'People',
    descriptionTitle2: 'Tokens',
    descriptionTitle3: 'Difficulty',
    descriptionTitle4: 'Hot',
    descriptionContent1: 29,
    descriptionContent2: 2,
    descriptionContent3: 'Easy',
    backgroundImage: '366638.jpg',
  },
  {
    isHot: true,
    icon: <FaMoneyBill />,
    title: 'Accounting course',
    type: 'Accounting',
    actionTitle: 'Learn',
    descriptionTitle1: 'People',
    descriptionTitle2: 'Tokens',
    descriptionTitle3: 'Difficulty',
    descriptionTitle4: 'Hot',
    descriptionContent1: 62,
    descriptionContent2: 5,
    descriptionContent3: 'Medium',
    backgroundImage: 'mountains.jpeg',
  },
];

const imageSize = 100;
export const marketCards = [
  {
    isHot: true,
    title: 'Yolo Pen',
    type: 'Yolo Merch',
    item: {
      type: 'merch',
    },
    actionTitle: 'Buy',
    descriptionTitle1: 'Price',
    descriptionTitle2: 'Bought',
    descriptionTitle3: 'Weight',
    descriptionTitle4: 'Hot',
    descriptionContent1: 0.5,
    descriptionContent2: 827,
    descriptionContent3: 'Tiny',
    backgroundImage: 'gold.jpg',
    icon: (
      <Image
        src="/market/pen.png"
        alt="Pen"
        width={imageSize}
        height={imageSize}
      />
    ),
  },
  {
    isHot: true,
    title: '5 EUR coupon',
    type: 'Freddo',
    item: {
      type: 'food',
    },
    actionTitle: 'Buy',
    descriptionTitle1: 'Price',
    descriptionTitle2: 'Bought',
    descriptionTitle3: 'Weight',
    descriptionTitle4: 'Hot',
    descriptionContent1: 3,
    descriptionContent2: imageSize,
    descriptionContent3: '200 (g)',
    backgroundImage: 'bg.jpg',
    icon: (
      <Image
        src="/market/burger.png"
        alt="Burger"
        width={imageSize}
        height={imageSize}
      />
    ),
  },
  {
    isHot: true,
    title: 'Yolo Cap',
    type: 'Yolo Merch',
    item: {
      type: 'merch',
    },
    actionTitle: 'Buy',
    descriptionTitle1: 'Price',
    descriptionTitle2: 'Bought',
    descriptionTitle3: 'Weight',
    descriptionTitle4: 'Hot',
    descriptionContent1: 8,
    descriptionContent2: 500,
    descriptionContent3: 'Tiny',
    backgroundImage: 'gold.jpg',
    icon: (
      <Image
        src="/market/cap.png"
        alt="Product"
        width={imageSize}
        height={imageSize}
      />
    ),
  },
  {
    isHot: false,
    title: 'Yolo Dishes',
    type: 'Yolo Merch',
    item: {
      type: 'merch',
    },
    actionTitle: 'Buy',
    descriptionTitle1: 'Price',
    descriptionTitle2: 'Bought',
    descriptionTitle3: 'Weight',
    descriptionTitle4: 'Cold',
    descriptionContent1: 10,
    descriptionContent2: 52,
    descriptionContent3: '500 (g)',
    backgroundImage: 'bg.jpg',
    icon: (
      <Image
        src="/market/dishes.png"
        alt="Product"
        width={imageSize}
        height={imageSize}
      />
    ),
  },
  {
    isHot: false,
    title: 'Yolo Cup',
    type: 'Yolo Merch',
    item: {
      type: 'merch',
    },
    actionTitle: 'Buy',
    descriptionTitle1: 'Price',
    descriptionTitle2: 'Bought',
    descriptionTitle3: 'Weight',
    descriptionTitle4: 'Cold',
    descriptionContent1: 1,
    descriptionContent2: 50,
    descriptionContent3: 'Tiny',
    backgroundImage: 'gold.jpg',
    icon: (
      <Image
        src="/market/cup.png"
        alt="Product"
        width={imageSize}
        height={imageSize}
      />
    ),
  },
  {
    isHot: true,
    title: 'Yolo TShirt',
    type: 'Yolo Merch',
    item: {
      type: 'merch',
    },
    actionTitle: 'Buy',
    descriptionTitle1: 'Price',
    descriptionTitle2: 'Bought',
    descriptionTitle3: 'Weight',
    descriptionTitle4: 'Hot',
    descriptionContent1: 2,
    descriptionContent2: 1250,
    descriptionContent3: 'Tiny',
    backgroundImage: 'bg.jpg',
    icon: (
      <Image
        src="/market/tshirt.png"
        alt="Product"
        width={imageSize}
        height={imageSize}
      />
    ),
  },
];

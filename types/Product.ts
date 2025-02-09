export type Product = {
  name: string;
  price: {
    current: number;
    original: number;
    discount: string;
    currencyCode: string;
  };
  rating: {
    score: number;
    totalReviews: number;
  };
  description: {
    short: string;
    long: string;
    image: {
      url: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  images: {
    primary: string;
    gallery: ImageGallery[];
  };
  variants: Variant[];
  dimensions: Dimensions;
  features: Features;
  tags: string[];
  reviews: Reviews;
  actions: Actions;
  frequentlyBoughtWith: FrequentlyBoughtProduct[];
};

export type ImageGallery = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type Variant = {
  name: string;
  colorCode: string;
  price: {
    current: number;
    original: number;
    discount: string;
    currencyCode: string;
  };
};

export type Dimensions = {
  width: string;
  depth: string;
  height: string;
  seatWidth: string;
  seatDepth: string;
  seatHeight: string;
};

export type Features = {
  style: string;
  support: string;
};

export type Reviews = {
  summary: {
    averageRating: number;
    totalReviews: number;
    distribution: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
    };
  };
  items: ReviewItem[];
};

export type ReviewItem = {
  id: string;
  author: {
    name: string;
  };
  rating: number;
  content: string;
  date: string;
};

export type Actions = {
  canAddReview: boolean;
  canSeeAllReviews: boolean;
};

export type FrequentlyBoughtProduct = {
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: {
    score: number;
    totalReviews: number;
  };
  images: {
    primary: string;
    thumbnail: string;
  };
};

export type ApiResponse = {
  message: string;
  product: Product;
};

export interface Book {
  id: string;
  title: string;
  author?: string;
  price: string;
  discount?: string;
  coverUrl?: string;
}

export type ScreenType = 'HOME' | 'GIO_1' | 'GIO_2' | 'GIO_3';
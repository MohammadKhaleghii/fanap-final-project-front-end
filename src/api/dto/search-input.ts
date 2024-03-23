export interface SearchInput {
  id: number;
  imagePath: string;
  title: string;
  description: string;
  QTY: number;
  categoryID: number;
  categoryTitle: string;
  comments: Comment[];
  rate: number;
  information: Information;
  cost: number;
}

interface Comment {
  title: string;
  rate: number;
  suggestedByBuyer: boolean;
  buyerName: string;
}

interface Information {
  weight: string;
  introductionTime: string;
  size: string;
}

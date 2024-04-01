export interface SearchInput {
  id: number;
  imagePath: string;
  title: string;
  description: string;
  categoryID: number;
  categoryTitle: string;
  information: Information;
  cost: number;
}

interface Information {
  weight: string;
  introductionTime: string;
  size: string;
}

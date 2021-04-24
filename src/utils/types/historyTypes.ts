import { Categories } from './../../redux/types/homeTypes';
export interface IHistoryData {
  route: {
    key: string;
    name: string;
    params: {
      id: number;
    };
  };
}

export interface IListRow {
  styles: any;
  data: Categories;
  item: {
    id: number;
    total: number;
    date: string;
    description: string;
  };
}

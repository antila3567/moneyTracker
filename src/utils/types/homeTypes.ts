export interface IItem {
  color: string;
  expenses: any[];
  icons: number;
  id: number;
  name: string;
}
export interface IExpneses {
  id: number;
  title: string;
  description: string;
  location: string;
  total: number;
  status: string;
}

export interface ICategories {
  item: {
    id: number;
    name: string;
    icons: string;
    color: string;
    expenses: [
      {
        id: number;
        title: string;
        description: string;
        location: string;
        total: number;
        status: string;
      }
    ];
  };
}

export interface IBlockItem {
  id: number;
  name: string;
  icons: any;
  color: string;
  expenses: [
    {
      id: number;
      title: string;
      description: string;
      location: string;
      total: number;
      status: string;
    }
  ];
}
//CHARTPIE

export interface IChartPie {
  categories: any[];
  styles: any;
}
export interface IPiePart {
  color: string;
  expenses: any[];
  icons: number;
  id: number;
  name: string;
}

export interface IPieTrans {
  item: {
    color: string;
    expenseCount: number;
    id: number;
    label: string;
    name: string;
    percentFlat: string;
    y: number;
  };
}

export interface IBlock {
  item: {
    color: string;
    expenseCount: number;
    id: number;
    label: string;
    name: string;
    percentFlat: string;
    y: number;
  };
  styles: any;
  selected: {
    color: string;
    expenses: any[];
    icons: number;
    id: number;
    name: string;
  } | null;
}

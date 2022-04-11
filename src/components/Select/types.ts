export interface ItemProps {
  title: string;
  id: string;
}

export interface SelectProps {
  selectedItem: string | null;
  items: ItemProps[];
  onChangeItem: (value: string | null) => void;
}

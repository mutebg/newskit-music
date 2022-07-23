export type CardListItemProps = {
  title: string;
  cover: string;
  sub: string;
  id: string | number;
};

export type CardListProps = {
  list: CardListItemProps[];
};

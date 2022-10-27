type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

//<T extends { id: number }> thì item phải là Object phải có id kiểu number
//<T extends { }> thì là Array 
export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        );
      })}
    </div>
  );
};

export interface MinAccumulator<T> {
  item: T | null;
  value: number | null;
}

export function min<T>(items: T[], iteratee: (item: T) => number) {
  const { item } = items.reduce<MinAccumulator<T>>(
    (acc, item, i) => {
      const { value: previousValue } = acc;
      const currentValue = iteratee(item);

      return previousValue === null || currentValue < previousValue
        ? {
            item,
            value: currentValue,
          }
        : acc;
    },
    { item: null, value: null }
  );

  return item;
}

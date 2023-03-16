export const range = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(0)
    .map((_, idx) => start + idx);
};

export const getObjFromArr = (arr: object[], key: string) => {
  const map = new Map();
  arr.forEach(item => {
    const value = item[key as keyof typeof item];
    map.set(value, '');
  });
  const obj: { [Key: string]: string } = Object.fromEntries(map);
  return obj;
};

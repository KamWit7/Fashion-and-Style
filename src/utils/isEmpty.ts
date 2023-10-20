export const isEmpty = (obj: unknown) => {
  if (typeof obj === 'undefined' || obj === null) return true;

  return Object.keys(obj).length === 0;
};

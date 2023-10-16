export const cnJoin = (...all: string[]) =>
  all.reduce((prev, current) => prev + ' ' + current, '')

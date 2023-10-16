import { validators, extendTailwindMerge } from 'tailwind-merge'

export const cnJoin = (...all: string[]) =>
  all.reduce((prev, current) => prev + ' ' + current, '')

export const cn = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: [validators.isLength] }],
  },
})

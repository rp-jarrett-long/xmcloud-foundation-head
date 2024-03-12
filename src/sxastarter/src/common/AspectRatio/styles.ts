import { cva } from 'class-variance-authority';

// Utils
import { isInverse } from '../../utils';

// Types
import { BOOLEAN_TYPES } from '../types';

export const aspectRatioCVA = cva(['aspect-ratio-base'], {
  variants: {
    ...isInverse<BOOLEAN_TYPES>({
      true: ['aspect-ratio-inverse'],
      false: [''],
    }),
  },
});

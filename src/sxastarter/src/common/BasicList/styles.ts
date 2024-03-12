import { cva } from 'class-variance-authority';

// Utils
import { isInverse } from '../../utils';

// Types
import { BOOLEAN_TYPES } from '../types';

export const basicListCVA = cva(['basic-list-base'], {
  variants: {
    ...isInverse<BOOLEAN_TYPES>({
      true: ['basic-list-inverse'],
      false: [],
    }),
  },
});

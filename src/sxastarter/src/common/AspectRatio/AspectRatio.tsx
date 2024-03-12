import * as RadixAspectRatio from '@radix-ui/react-aspect-ratio';
import { cx, VariantProps } from 'class-variance-authority';

// Styles
import { aspectRatioCVA } from './styles';
// styles.css imported in global main.scss

// Types
import { Expand } from '../../utils';

export type AspectRatioRootProps = RadixAspectRatio.AspectRatioProps &
  Expand<Pick<VariantProps<typeof aspectRatioCVA>, 'isInverse'>>;

export const ratios = {
  '1:1': 1,
  '5:4': 5 / 4,
  '5:2': 5 / 2,
  '4:5': 4 / 5,
  '8:5': 8 / 5,
  '4:3': 4 / 3,
  '8:3': 8 / 3,
  '3:4': 3 / 4,
  '3:2': 3 / 2,
  '3:1': 3,
  '2:3': 2 / 3,
  '16:10': 16 / 10,
  '16:5': 16 / 5,
  '10:16': 10 / 16,
  'golden-ratio-landscape': 1.618,
  'golden-ratio-half-landscape': 3.235,
  'golden-ratio-portrait': 0.618,
  'golden-ratio-half-portrait': 0.144,
  '16:9': 16 / 9,
  '32:9': 32 / 9,
  '9:16': 9 / 16,
  '9:8': 9 / 8,
  '2:1': 2,
  '4:1': 4,
  '1:2': 1 / 2,
  '21:9': 21 / 9,
  '14:3': 14 / 3,
  '9:21': 9 / 21,
  '6:7': 6 / 7,
  'A4-landscape': 1.414,
  'A4-half-landscape': 2.828,
  'A4-portrait': 0.707,
  'A4-half-portrait': 1.414,
  'letter-landscape': 1.294,
  'letter-half-landscape': 2.588,
  'letter-portrait': 0.772,
  'letter-half-portrait': 1.545,
};

export type Ratio = keyof typeof ratios | number;

type AspectRatioProps = Omit<AspectRatioRootProps, 'ratio'> & {
  ratio: Ratio;
};

export const isAspectRatio = (value: string) => value in ratios;

const AspectRatio = (props: AspectRatioProps) => {
  const { isInverse, className, ratio, ...rest } = props;

  return (
    <RadixAspectRatio.Root
      className={cx(aspectRatioCVA({ isInverse }), className)}
      ratio={typeof ratio === 'string' ? ratios[ratio] : ratio}
      {...rest}
    />
  );
};

export { AspectRatio };
export type { AspectRatioProps };

import { cva, VariantProps } from 'class-variance-authority';

const boxCva = cva([''], {
  variants: {
    span: {
      1: ['col-1-4'],
      2: ['col-2-4'],
      3: ['col-3-4'],
      4: ['col-4-4'],
    },
    spanMd: {
      1: ['col-1-8'],
      2: ['col-2-8'],
      3: ['col-3-8'],
      4: ['col-4-8'],
      5: ['col-5-8'],
      6: ['col-6-8'],
      7: ['col-7-8'],
      8: ['col-8-8'],
    },
    spanLg: {
      1: ['col-1-12'],
      2: ['col-2-12'],
      3: ['col-3-12'],
      4: ['col-4-12'],
      5: ['col-5-12'],
      6: ['col-6-12'],
      7: ['col-7-12'],
      8: ['col-8-12'],
      9: ['col-9-12'],
      10: ['col-10-12'],
      11: ['col-11-12'],
      12: ['col-12-12'],
    },
  },
});

type BoxProps = VariantProps<typeof boxCva>;

export default function Box(
  props: React.PropsWithChildren<BoxProps> & Omit<React.HTMLProps<HTMLDivElement>, 'className'>
) {
  const { span = 4, spanMd, spanLg } = props;
  return <div className={boxCva({ span, spanMd, spanLg })}>{props.children}</div>;
}

import { ElementType } from 'react';
import { cx, VariantProps } from 'class-variance-authority';

// Styles
// import './styles.css'; imported in global main.scss
import { basicListCVA } from './styles';

// Types
import { Expand } from '../../utils';

export type BasicListProps<List extends ElementType> = Expand<
  Pick<VariantProps<typeof basicListCVA>, 'isInverse'>
> & {
  as?: List;
};

export function BasicList<List extends ElementType = 'ul'>(
  props: BasicListProps<List> &
    Omit<React.ComponentPropsWithoutRef<List>, keyof BasicListProps<List>>
) {
  const { as, className, isInverse, ...rest } = props;
  const Component = as || 'ul';

  return <Component className={cx(basicListCVA({ isInverse }), className)} {...rest} />;
}

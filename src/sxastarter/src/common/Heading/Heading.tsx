import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

/** 1) Defined in Sitecore as an SXA Style: \
 * `~/Presentation/Styles/Heading` \
 * 2) Defined by Brockmann export in _tokens.scss
 */
const headingClassNames = {
  'typography-large-display': 'typography-large-display',
  'typography-medium-display': 'typography-medium-display',
  'typography-small-display': 'typography-small-display',
  'typography-x-small-display': 'typography-x-small-display',
  'typography-xx-large-heading': 'typography-xx-large-heading',
  'typography-x-large-heading': 'typography-x-large-heading',
  'typography-large-heading': 'typography-large-heading',
  'typography-medium-heading': 'typography-medium-heading',
  'typography-small-heading': 'typography-small-heading',
  'typography-x-small-heading': 'typography-x-small-heading',
};

export type HeadingLevel = keyof Pick<
  React.JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

export type HeadingTypographyClassName = keyof typeof headingClassNames;

export const isHeadingTypographyClassName = (value: string): value is HeadingTypographyClassName =>
  value in headingClassNames;

export type HeadingProps = {
  tag?: HeadingLevel;
};

export function Heading(props: HeadingProps & React.ComponentProps<typeof Text>) {
  const { tag = 'h2' } = props;
  return <Text className={props.className} tag={tag as string} field={props.field} id={props.id} />;
}

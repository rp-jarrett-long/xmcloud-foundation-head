import { Text as JssText } from '@sitecore-jss/sitecore-jss-nextjs';
import { cx } from 'class-variance-authority';
import { popStyles } from 'src/utils/pop-style';

/** Modify this with any changes to Figma TextStyles */
export const textStyleMap = {
  'typography-xx-large-heading': 'typography-xx-large-heading',
  'typography-xx-large-label': 'typography-xx-large-label',
  'typography-xx-large-paragraph': 'typography-xx-large-paragraph',
  'typography-x-large-heading': 'typography-x-large-heading',
  'typography-x-large-label': 'typography-x-large-label',
  'typography-x-large-paragraph': 'typography-x-large-paragraph',
  'typography-large-display': 'typography-large-display',
  'typography-large-heading': 'typography-large-heading',
  'typography-large-label': 'typography-large-label',
  'typography-large-paragraph': 'typography-large-paragraph',
  'typography-medium-display': 'typography-medium-display',
  'typography-medium-heading': 'typography-medium-heading',
  'typography-medium-label': 'typography-medium-label',
  'typography-medium-paragraph': 'typography-medium-paragraph',
  'typography-small-display': 'typography-small-display',
  'typography-small-heading': 'typography-small-heading',
  'typography-small-label': 'typography-small-label',
  'typography-small-paragraph': 'typography-small-paragraph',
  'typography-x-small-display': 'typography-x-small-display',
  'typography-x-small-heading': 'typography-x-small-heading',
  'typography-x-small-label': 'typography-x-small-label',
  'typography-x-small-paragraph': 'typography-x-small-paragraph',
  'typography-xx-small-label': 'typography-xx-small-label',
  'typography-xx-small-paragraph': 'typography-xx-small-paragraph',
  'typography-xx-small-italic': 'typography-xx-small-italic',
};

export type TextClassName = keyof typeof textStyleMap;

export type TextProps = {
  tag?: keyof React.JSX.IntrinsicElements;
  textStyle?: TextClassName;
  className?: string;
};

export function Text(props: TextProps & React.ComponentProps<typeof JssText>) {
  const { tag, className, ...rest } = props;
  const [styles, textTypographyClassName] = popStyles(
    className ?? '',
    (value) => value in textStyleMap
  );
  return (
    <JssText
      tag={tag ?? 'span'}
      className={cx(
        styles,
        textTypographyClassName
          ? textTypographyClassName
          : textStyleMap[props.textStyle ?? 'typography-medium-paragraph']
      )}
      {...rest}
    />
  );
}

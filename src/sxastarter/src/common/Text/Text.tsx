import { ElementType } from 'react';
import { cx } from 'class-variance-authority';
import { ComponentPropsWithoutRef } from 'react';

// Modify this with any changes to Figma TextStyles
export const textStyleMap = {
  xxLargeHeading: 'typography-xx-large-heading',
  xxLargeLabel: 'typography-xx-large-label',
  xxLargeParagraph: 'typography-xx-large-paragraph',
  xLargeHeading: 'typography-x-large-heading',
  xLargeLabel: 'typography-x-large-label',
  xLargeParagraph: 'typography-x-large-paragraph',
  largeDisplay: 'typography-large-display',
  largeHeading: 'typography-large-heading',
  largeLabel: 'typography-large-label',
  largeParagraph: 'typography-large-paragraph',
  mediumDisplay: 'typography-medium-display',
  mediumHeading: 'typography-medium-heading',
  mediumLabel: 'typography-medium-label',
  mediumParagraph: 'typography-medium-paragraph',
  smallDisplay: 'typography-small-display',
  smallHeading: 'typography-small-heading',
  smallLabel: 'typography-small-label',
  smallParagraph: 'typography-small-paragraph',
  xSmallDisplay: 'typography-x-small-display',
  xSmallHeading: 'typography-x-small-heading',
  xSmallLabel: 'typography-x-small-label',
  xSmallParagraph: 'typography-x-small-paragraph',
  xxSmallLabel: 'typography-xx-small-label',
  xxSmallParagraph: 'typography-xx-small-paragraph',
  xxSmallItalic: 'typography-xx-small-italic',
};

export type TextProps<T extends ElementType> = {
  as?: T;
  textStyle?: keyof typeof textStyleMap;
};

export function Text<T extends ElementType = 'span'>(
  props: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>
) {
  const { as, className, textStyle = 'mediumParagraph', ...rest } = props;
  const Component = as || 'span';
  return <Component className={cx(textStyleMap[textStyle], className)} {...rest} />;
}

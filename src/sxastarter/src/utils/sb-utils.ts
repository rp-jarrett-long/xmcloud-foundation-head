import { StoryObj, StoryContext } from '@storybook/react';

type SBBGOption = {
  name: string;
  value: string;
};

/**
 * Returns a reasonable color for story's current background color
 *
 * @param context Storybook Context
 * @returns string
 */
export const getForegroundColor = (context: StoryContext<StoryObj>) => {
  const defaultBG = context.parameters.backgrounds.values.find(
    (bg: SBBGOption) => bg.name === 'default'
  );
  const inverseBG = context.parameters.backgrounds.values.find(
    (bg: SBBGOption) => bg.name === 'inverse'
  );
  const bgValue = context?.globals?.backgrounds?.value || '';
  const bg = bgValue
    ? context.parameters.backgrounds.values.find((bg: SBBGOption) => bg.value === bgValue)
    : context.parameters.backgrounds.values.find(
        (bg: SBBGOption) => bg.name === context.parameters.backgrounds.default
      );

  const defaultForeground = `var(--rp-semantic-color-content-default-primary, rgba(20, 20, 20, 1))`;
  const inverseForeground = `var(--rp-semantic-color-content-inverse-primary, rgba(255, 255, 255, 1))`;

  return bg?.value === inverseBG.value ? inverseForeground : defaultForeground;
};

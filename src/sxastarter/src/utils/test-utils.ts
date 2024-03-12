import { RenderResult, queries } from '@testing-library/react';

export const expectTestIdToHaveClass = (
  screen: RenderResult<typeof queries>,
  testId: string,
  className: string,
  isTrue = true
) => {
  if (isTrue) {
    expect(screen.getAllByTestId(testId)[0]).toHaveClass(className);
  } else {
    expect(screen.getAllByTestId(testId)[0]).not.toHaveClass(className);
  }
};

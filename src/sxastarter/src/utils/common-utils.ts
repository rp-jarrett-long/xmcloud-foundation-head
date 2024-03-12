import { Children, isValidElement, ReactElement, ReactNode } from 'react';

/**
 * @param children
 * @description - This function will take the children and filter out any children that are not valid.
 * @returns - An array of valid children.
 */
export const getValidChildren = (children: ReactNode) =>
  Children.toArray(children).filter((child) => isValidElement(child)) as ReactElement[];

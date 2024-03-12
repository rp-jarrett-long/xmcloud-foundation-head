import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';

/**
 * @summary Standard Rendering Parameters that are on every component.
 * @param styles - Concatenation of `GridParameters` and `Styles`.
 * @param Styles - Any SXA settings that are applied in the Styles section.
 * @param GridParameters - Any SXA settings that are applied in the Layout section.
 * @param RenderingIdentifier - Set as the HTML id of the root element of the component.
 * @example
 * ```tsx
 * import { StandardParams } from 'src/types/standard-params';
 * export const Default = (props: {
 *   params: StandardParams & { customParam: string };
 * }) => <div id={props.params.RenderingIdentifier}
 *            className={props.params.styles}>
 *       </div>;
 * ```
 */
export type StandardParams = {
  /** Concatenation of `GridParameters` and `Styles`. */
  styles: string;

  /** All class names that are applied in the Styles section on Pages. */
  Styles: string;

  /** All class names that are applied in the Layout section on Pages.  */
  GridParameters: string;

  /** Set this as the value of the root HTMLElement's id attribute. */
  RenderingIdentifier: string;
} & ComponentParams;

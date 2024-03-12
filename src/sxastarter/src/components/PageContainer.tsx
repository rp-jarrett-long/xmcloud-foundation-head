import { ComponentRendering, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import { DynamicPlaceholderParams } from 'src/types/rendering-parameters/dynamic-placeholder-params';
import { StandardParams } from 'src/types/rendering-parameters/standard-params';
import { commonStyles, popStyles } from 'src/utils/pop-style';

export const Default = (props: {
  rendering: ComponentRendering;
  params: StandardParams & DynamicPlaceholderParams;
}): JSX.Element => {
  const [styles, centerGrid, rowGutters, reverseGrid] = popStyles(
    props.params.styles,
    'column-grid--center',
    'column-grid--row-gap',
    RegExp(/column-grid--reverse-([^\s]+)/g),
    commonStyles.colSpans // col-* classes are added by default by Sitecore, but not needed in this component.
  );
  return (
    <div className={`page-container ${styles}`} id={props.params.RenderingIdentifier ?? undefined}>
      <div
        className={classNames(
          'column-grid',
          centerGrid && centerGrid,
          rowGutters && rowGutters,
          reverseGrid && reverseGrid
        )}
      >
        <Placeholder
          name={`page-container-${props.params.DynamicPlaceholderId}`}
          rendering={props.rendering}
        />
      </div>
    </div>
  );
};

import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StandardParams } from 'src/types/rendering-parameters/standard-params';
import { Heading, isHeadingTypographyClassName } from 'src/common/Heading/Heading';
import { popStyles } from 'src/utils/pop-style';
import classNames from 'classnames';

export const Default = (props: {
  params: StandardParams;
  fields: {
    Heading: Field<string>;
    Body: Field<string>;
  };
}): JSX.Element => {
  const [styles, headingTypographyClassName] = popStyles(
    props.params.styles,
    isHeadingTypographyClassName
  );
  return props.fields ? (
    <div className={classNames('card', styles)}>
      <Heading
        tag="h3"
        className={classNames(headingTypographyClassName && headingTypographyClassName)}
        field={props.fields.Heading}
      />
    </div>
  ) : (
    <span className="is-empty-hint">Card</span>
  );
};

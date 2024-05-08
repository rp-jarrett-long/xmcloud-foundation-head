import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StandardParams } from 'src/types/rendering-parameters/standard-params';
import { Heading, HeadingLevel } from 'src/common/Heading/Heading';

export const Default = (props: {
  params: { HeadingLevel: string } & StandardParams;
  fields: {
    Text: Field<string>;
  };
}): JSX.Element => {
  return props.fields ? (
    <Heading
      tag={(props.params.HeadingLevel as HeadingLevel) || 'h2'}
      className={`${props.params.styles} heading`}
      id={props.params.RenderingIdentifier ?? undefined}
      field={props.fields.Text}
    />
  ) : (
    <span className="is-empty-hint">Heading</span>
  );
};

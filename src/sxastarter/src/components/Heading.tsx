import React from 'react';
import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StandardParams } from 'src/types/rendering-parameters/standard-params';

export const Default = (props: {
  params: { HeadingLevel: string } & StandardParams;
  fields: {
    Text: Field<string>;
  };
}): JSX.Element => {
  return props.fields ? (
    <Text
      tag={props.params.HeadingLevel || 'h2'}
      className={`${props.params.styles} heading`}
      id={props.params.RenderingIdentifier ?? undefined}
      field={props.fields.Text}
    />
  ) : (
    <span className="is-empty-hint">Heading</span>
  );
};

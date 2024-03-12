import React from 'react';
import { Field, RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';

export type RichTextProps = {
  params: { [key: string]: string };
  fields: {
    Text: Field<string>;
  };
};

export const Default = (props: RichTextProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`rich-text ${props.params.styles.trimEnd()}`} id={id ? id : undefined}>
      {props.fields ? (
        <JssRichText field={props.fields.Text} />
      ) : (
        <span className="is-empty-hint">Rich text</span>
      )}
    </div>
  );
};

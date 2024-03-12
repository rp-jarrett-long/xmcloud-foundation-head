import React from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  ImageField,
  Field,
  LinkField,
  Text,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { AspectRatio, Ratio, isAspectRatio } from 'src/common/AspectRatio';

interface Fields {
  Image: ImageField;
  ImageCaption: Field<string>;
  TargetUrl: LinkField;
}

type ImageProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: ImageProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  const id = props.params.RenderingIdentifier;

  const stylesArray = props.params.styles.split(' ');
  const aspectRatio = stylesArray.find(isAspectRatio) as Ratio;
  if (aspectRatio) {
    stylesArray.splice(stylesArray.indexOf(aspectRatio.toString()), 1);
  }
  const styles = stylesArray.join(' ');

  if (!props.fields) {
    return (
      <div className={`component image ${styles}`.trimEnd()} id={id ? id : undefined}>
        <div className="component-content">
          <span className="is-empty-hint">Image</span>
        </div>
      </div>
    );
  }

  const Image = () =>
    aspectRatio ? (
      <AspectRatio ratio={aspectRatio}>
        <JssImage field={props.fields.Image} />
      </AspectRatio>
    ) : (
      <JssImage field={props.fields.Image} />
    );

  return (
    <div className={`component image ${styles}`} id={id ? id : undefined}>
      <div className="component-content">
        {sitecoreContext.pageState === 'edit' || !props.fields.TargetUrl?.value?.href ? (
          <Image />
        ) : (
          <JssLink field={props.fields.TargetUrl}>
            <Image />
          </JssLink>
        )}
        {/* <Text
          tag="span"
          className="image-caption field-imagecaption"
          field={props.fields.ImageCaption}
        /> */}
      </div>
    </div>
  );
};

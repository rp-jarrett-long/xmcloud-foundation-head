import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

export const Default = (props: ComponentProps): JSX.Element => {
  console.log('my placeholder', props);
  return (
    <div className="container my-component">
      <Placeholder name="my-placeholder" rendering={props.rendering} />
    </div>
  );
};

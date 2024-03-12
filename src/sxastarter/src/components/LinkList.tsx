import { Link as JssLink, LinkField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { StandardParams } from 'src/types/rendering-parameters/standard-params';

export const Default = (props: {
  params: StandardParams;
  fields: {
    data: {
      datasource: {
        children: {
          results: {
            field: {
              link: LinkField;
            };
          }[];
        };
        field: {
          title: TextField;
        };
      };
    };
  };
}): JSX.Element => {
  return (
    <ul
      className={`link-list ${props.params.styles}`.trimEnd()}
      id={props.params.RenderingIdentifier ?? undefined}
    >
      {props.fields?.data?.datasource?.children?.results
        ?.filter((resultFieldLink) => resultFieldLink?.field?.link)
        ?.map((resultFieldLink, index: number) => (
          <li key={`${index}${resultFieldLink.field.link.value.href}`}>
            <JssLink field={resultFieldLink.field.link} />
          </li>
        )) ?? <li>Link List</li>}
    </ul>
  );
};

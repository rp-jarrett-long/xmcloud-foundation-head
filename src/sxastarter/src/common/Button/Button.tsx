type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
};

export default function Button(props: ButtonProps & React.HTMLProps<HTMLButtonElement>) {
  const { size = 'medium', variant = 'primary', disabled, loading, children, ...rest } = props;
  return <button onClick={props.onClick}></button>;
}

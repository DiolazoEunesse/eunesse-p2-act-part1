export default function Button(props){
  const children = props.children;
  const onClick = props.onClick;
  return <button onClick={onClick}>{children}</button>;
};



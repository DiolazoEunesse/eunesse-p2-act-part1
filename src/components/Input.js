export default function Input(props){
  const type = props.type;
  const placeholder = props.placeholder;
  const onChange = props.onChange;
  const defaultValue = props.defaultValue;
  return <input type={type} placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} />;
};

// packages
import { omit } from "lodash";

// styles
import { Label, Message, Icon, InputField, Group } from "./styles";

const Input = (props) => {
  const { mb, label, icon, valid, invalid } = props;
  const attrs = omit(props, ["mb", "label", "icon", "valid", "invalid"]);

  return (
    <Group mb={mb} status={valid ? "valid" : invalid ? "invalid" : null}>
      <InputField id={attrs.name} {...attrs} />
      <Label htmlFor={attrs.name}>{label}</Label>
      {valid && <Message variant="success">{valid}</Message>}
      {invalid && <Message variant="error">{invalid}</Message>}
      {icon && <Icon>{icon}</Icon>}
    </Group>
  );
};

export default Input;

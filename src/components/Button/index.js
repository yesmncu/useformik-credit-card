// pckgs
import { omit } from "lodash";

// styles
import { Wrapper, WrapperPrimary, WrapperBook, WrapperCheckout, WrapperOutline, WrapperOutlineBook, WrapperSecondary } from "./styles";

const Button = (props) => {
  const { children, type } = props;
  const attrs = omit(props, ["children", "type"]);

  if (type == "primary") {
    return <WrapperPrimary {...attrs}>{children}</WrapperPrimary>;
  }

  if (type == "book") {
    return <WrapperBook {...attrs}>{children}</WrapperBook>;
  }

  if (type == "checkout") {
    return <WrapperCheckout {...attrs}>{children}</WrapperCheckout>;
  }

  if (type == "outline") {
    return <WrapperOutline {...attrs}>{children}</WrapperOutline>;
  }

  if (type == "outlineBook") {
    return <WrapperOutlineBook {...attrs}>{children}</WrapperOutlineBook>;
  }

  if (type == "secondary") {
    return <WrapperSecondary {...attrs}>{children}</WrapperSecondary>;
  }

  return <Wrapper {...attrs}>{children}</Wrapper>;
};

export default Button;

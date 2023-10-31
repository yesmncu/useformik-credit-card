import styled from "styled-components";

const Wrapper = styled.button`
  display: inline-block;
  width: 100%;
  max-width:100%;
  height: 45px;
  line-height: 43px;
  text-align: center;
  border-radius: 100px;
  border: unset;
  cursor: pointer;
  color: ${(props) => props.theme.TEXT_PRIMARY};
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) => props.theme.GREY02};
  border: solid 1px transparent;
  transition: all 0.3s linear;
  text-decoration:auto;
  &:hover:not(:disabled) {
    color: #fff;
    background-color: ${(props) => props.theme.GREY04};
  }

  &:disabled {
    color: ${(props) => props.theme.TEXT_DISABLED};
    background-color: ${(props) => props.theme.GREY02};
    cursor: default;
  }
`;

const WrapperPrimary = styled(Wrapper)`
  color: #fff;
  background-color: ${(props) => props.theme.BRAND02};
`;

const WrapperBook = styled(Wrapper)`
  color: #fff;
  background-color: ${(props) => props.theme.BRAND01};
`;

const WrapperCheckout = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: ${(props) => props.theme.BRAND01};
  width: 100%;
  height: 51px;
  line-height: 49px;
  
  & > svg {
    font-size: 18px;
    margin-right:  ${(props) => props.theme.SPACING01};
  }
`;

const WrapperOutline = styled(Wrapper)`
  color: ${(props) => props.theme.BRAND02};
  background: transparent;
  border-color: ${(props) => props.theme.BRAND02};

  &:hover:not(:disabled) {
    color: #fff;
    background-color: ${(props) => props.theme.BRAND02};
  }  
`;

const WrapperOutlineBook = styled(Wrapper)`
  color: ${(props) => props.theme.BRAND01};
  background: transparent;
  border-color: ${(props) => props.theme.BRAND01};

  &:hover:not(:disabled) {
    color: #fff;
    background-color: ${(props) => props.theme.BRAND01};
  }  
`;

const WrapperSecondary = styled(Wrapper)`
  color: ${(props) => props.theme.TEXT_SECONDARY};
  background: transparent;
  border-color: ${(props) => props.theme.TEXT_SECONDARY};

  &:hover:not(:disabled) {
    color: #fff;
    background-color: ${(props) => props.theme.TEXT_SECONDARY};
  }  
`;

export { Wrapper, WrapperPrimary, WrapperBook, WrapperCheckout, WrapperOutline, WrapperOutlineBook, WrapperSecondary };

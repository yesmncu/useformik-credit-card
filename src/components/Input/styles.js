import styled, { css } from "styled-components";

const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.theme.INPUT_LABELS};
  margin-bottom: 5px; 
`;

const Message = styled.span`
  position:absolute;
  font-size: 11px;
  font-weight: 300;
  margin-top: ${(props) => props.theme.SPACING01};
  line-height:normal;
  bottom: -8px;
  left: 9px;
  background: #fff;
  padding-inline: 6px;

  ${(props) =>
    props.variant == "success" &&
    css`
      color: ${(props) => props.theme.SUCCESS};
    `}

  ${(props) =>
    props.variant == "error" &&
    css`
      color: ${(props) => props.theme.ERROR};
    `}
`;

const Icon = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  font-size: 18px;
  color: ${(props) => props.theme.TEXT_PRIMARY};
`;

const InputField = styled.input`
  width: 100%;
  padding: 13px;
  font-weight: 500;
  line-height: 20px;
  outline: none;
  border: 1px solid ${(props) => props.theme.GREY03};
  border-radius: ${(props) => props.theme.RADIUS02};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: border-color 0.15s ease-in-out;
  color: ${(props) => props.theme.TEXT_PRIMARY};

  &:focus:not(:disabled) {
    border: 2px solid ${(props) => props.theme.BRAND02};
    padding: 12px;
    color: ${(props) => props.theme.TEXT_PRIMARY};
  }

  &::placeholder {
    color: ${(props) => props.theme.INPUT_LABELS};
  }
`;

const Group = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}px;
    `}

  & > ${Label} {
    position: absolute;
    top: 0;
    left: 15px;
    transform: translateY(14px);
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    transition-duration: 300ms;
    margin-bottom: 0;
  }

  &:focus-within > ${Label} {
    font-size: 12px;
    transform: translateY(5px);
  }

  & > ${InputField} {
    padding: 20px 14px 6px 14px;

    &::placeholder {
      opacity: 0;
      color: transparent;
    }

    &:focus {
      border: 2px solid ${(props) => props.theme.BRAND02};
      padding: 19px 13px 5px 13px;
    }

    &:not(:placeholder-shown) + ${Label} {
      font-size: 12px;
      transform: translateY(5px);
    }
  }

  ${(props) =>
    props.status == "valid" &&
    css`
      & > ${InputField} {
        border-color: ${(props) => props.theme.SUCCESS};

        &:focus {
          padding: 20px 14px 6px 14px;
          border: 1px solid ${(props) => props.theme.SUCCESS};
        }
      }
      & > ${Icon} {
        color: ${(props) => props.theme.SUCCESS};
      }
    `}

  ${(props) =>
    props.status == "invalid" &&
    css`
      & > ${InputField} {
        border-color: ${(props) => props.theme.ERROR};
        &:focus {
          padding: 20px 14px 6px 14px;
          border: 1px solid ${(props) => props.theme.ERROR};
        }
      }
      & > ${Icon} {
        color: ${(props) => props.theme.ERROR};
      }
    `}
`;

export { Label, Message, Icon, InputField, Group };

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  height:100vh;
`;
const Inner = styled.div`
  position:relative;
  display:inline-block;
  border: 1px solid ${(props) => props.theme.GREY03};
  border-radius: ${(props) => props.theme.RADIUS02};
  padding: ${(props) => props.theme.SPACING04};
  box-shadow: 1px 1px 8px ${(props) => props.theme.GREY04};
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  flex-flow:wrap;
  gap: ${(props) => props.theme.SPACING03}
`;
const Col12 = styled.div`
  position: relative;
  width: 100%;
`;

export {
  Wrapper,
  Inner,
  Row,
  Col12,
};

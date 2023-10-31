import styled from "styled-components";

const Wrapper = styled.form`
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

const Success = styled.div`
 position:relative;
 display:flex;
 flex-direction:column;
 align-items:center;
 gap: ${(props) => props.theme.SPACING02};
 font-size:20px;
 font-weight:500;

 svg { 
   font-size:82px;
   color: ${(props) => props.theme.SUCCESS}
  }

`;

export {
  Wrapper,
  Inner,
  Row,
  Col12,
  Success
};

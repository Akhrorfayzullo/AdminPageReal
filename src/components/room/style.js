import styled from "styled-components";

export const Con = styled.div`
  width: ${(props) => (props.$biggerOne ? "350px" : "256px")};

  height: 149px;
  flex-shrink: 0;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: ${(props) => (props.$primary ? "#BF4F74" : "#e0b973")};
  border: ${(props) => (props.$biggerOne ? "2px solid red" : "0")};
`;

export const Text = styled.div`
  font-size: 16;
  color: green;
`;

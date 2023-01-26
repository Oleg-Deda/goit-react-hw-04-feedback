import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 10px;
   justify-content: end;
  flex-direction: column;
`;

export const Item = styled.li`
  width: 240px;
  margin: 0 auto;
  text-align: left;
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
`;
import styled from "styled-components";

export const OptionsBox = styled.div`
display: flex;
justify-content: center;
gap: 20px;
`;

export const OptionsButton = styled.button`
width: 100px;
padding: 5px;
border-radius: 4px;
border: 1px solid #adacac;
background-color: #a0b3b0;
&:hover,
&:focus{
background-color: #e2e2d8;
}
`;
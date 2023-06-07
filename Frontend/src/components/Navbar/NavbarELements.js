import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const NavBtnLink = styled(LinkR)`
  &:hover {
    transition: all 0.2s ease-in-out;
    background: green;
    color: #010606;
  }
`;

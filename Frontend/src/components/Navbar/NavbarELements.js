import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const NavBtnLink = styled(LinkR)`
  & {
    text-decoration: none;
    color: white;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
  }
`;

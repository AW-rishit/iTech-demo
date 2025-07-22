'use client'; // If you're using App Router

import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0.6rem 2rem;
  margin: 0;
  font-family: sans-serif;
  font-size: inherit;
  position: relative;
  display: inline-block;
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 17px;
  border-radius: 500px;
  overflow: hidden;
  background: #66ff6600;
  color: ghostwhite;

  span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
  }

  &:hover span {
    color: black;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &::before {
    content: "";
    background: #FB4141;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }
`;

export default function Button({text}) {
  return (
    <StyledButton>
      <span>{text}</span>
    </StyledButton>
  );
}

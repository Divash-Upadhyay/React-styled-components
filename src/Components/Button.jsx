import React from "react";
import styled from "styled-components";
const Btn = styled.button`
  border: 1px ${(e) => e.border} grey;
  color: ${(e) => e.color};
  background-color: ${(e) => (e.bg == "#2490fe" ? "#2490fe" : "transparent")};
  margin: 5px;
`;
export const Button = () => {
  return (
    <>
      <div>
        <Btn color="white" bg="#2490fe">
          Primary Button
        </Btn>
        <Btn border="solid">Default Button</Btn>
        <Btn border="dashed">Dashed Button</Btn>
      </div>
      <div>
        <Btn>Text Button</Btn>
        <Btn color="blue">Link Button</Btn>
      </div>
    </>
  );
};

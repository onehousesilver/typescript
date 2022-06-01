import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border: 3px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  const [value, setValue] = useState<number | string>(0);
  setValue(2);
  setValue("hello");
  return <Container bgColor={bgColor} borderColor={borderColor ?? "blue"} />;
}

export default Circle;

import React from "react";
import styled from "styled-components";
import COLOR from "../../variables/color";
import TEXTS from "../../variables/texts";

const Example = () => {
  return <StyledText>されるかな デプロイ（倒置法）</StyledText>;
};
export default Example;

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.S}
`;

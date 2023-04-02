import styled from "styled-components"
import { useState } from "react";

export const getParameterByName = (name: any, url = window.location.href) => {
  const paramName = name.replace(/[\]]/g, "\\$&");
  const regex = new RegExp(`[?&]${paramName}(=([^&#]*)|&|#|$)`);

  const results = regex.exec(url);
  if (!results) {
    return null;
  }

  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const useInput = ({ type }: { type: string }) => {
  const [value, setValue] = useState("");

  const input = (
    <StyledInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
  return [value, input];
};

const StyledInput = styled.textarea`
  background-color: #ff0;
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  font-family: "Helvetica";
`
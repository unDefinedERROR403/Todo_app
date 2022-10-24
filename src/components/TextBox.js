import React from "react";
import { Button } from "react-bootstrap";
 
function TextBox({ onChange, onClick }) {
  return (
    <>
      <textarea onChange={onChange} />
      <Button onClick={onClick}>Submit</Button>
    </>
  );
}
 
export default TextBox;

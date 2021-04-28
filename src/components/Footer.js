import React from "react";
const footerStyle = {
  backgroundColor: "#fd56b8f6",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "70px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "10px",
  height: "120px",
  width: "100%"
};
const Footer = () => {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>
          <span>Benya Subvatananukul <a className="App-link" href="http://cs.kmutnb.ac.th/">CS@KMUTNB</a></span>
      </div>
    </div>
  );
};
export default Footer;
import React from "react";
import QRCode from "react-qr-code";
import Link from 'next/link'

const QRComp = ({ value, data }) => {
  // console.log("data", value);
  return (
    <div>
      <Link href={value}>
        <QRCode
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </Link >
    </div>
  );
};

export default QRComp;

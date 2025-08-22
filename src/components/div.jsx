import React, { useState } from 'react';

function TermsAndConditions() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <div>
      <h1>Terms and Conditions</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lectus in felis aliquam mollis nec et diam. Proin
        eget justo at odio dictum pretium non a eros. Donec sed tellus quis dui tincidunt ultrices. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus vestibulum nunc nec lectus volutpat, at aliquam
        diam elementum. Curabitur at velit sit amet magna egestas scelerisque sed eu quam. Donec ac metus id dolor tincidunt
        consequat et a nisl. Vestibulum in urna vel massa lacinia mollis nec ac eros. Aliquam erat volutpat. Sed sit amet
        sapien at odio iaculis semper. Nullam ut lectus id est vestibulum blandit. Proin eget aliquet justo, vel scelerisque
        nulla. Nunc a tellus nec dui elementum tempus.
      </p>
      <button onClick={handleAccept}>I accept the terms and conditions</button>
    </div>
  );
}
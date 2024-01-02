import React from "react";

const ResumeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="currentColor"
      d="M19 3H5C3.34 3 2 4.34 2 6v12c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3zM5 5h14v2H5V5zm7 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm5 6H5v2h12v-2zm0 4H5v2h12v-2z"
    />
  </svg>
);

export { ResumeIcon };
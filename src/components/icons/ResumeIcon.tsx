import React from "react";

const ResumeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="currentColor"  
      d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zM12 5c3.87 0 7 3.13 7 7 0 1.37-.35 2.67-.95 3.8l1.01 1.01C20.35 15.73 21 14.48 21 13c0-3.87-3.13-7-7-7z"/>
  </svg>
);

export { ResumeIcon };
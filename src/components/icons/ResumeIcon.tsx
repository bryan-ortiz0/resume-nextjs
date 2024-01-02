// File: ResumeIcon.tsx
import React from "react";

const ResumeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M12 10.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zM12 12.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0 2a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"
      />
    </svg>
  );
};

export { ResumeIcon };
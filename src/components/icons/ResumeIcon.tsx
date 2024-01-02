import React from "react";

const ResumeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M16.21 16.21A6 6 0 0 1 12 20H7a8 8 0 1 1 0-16h5a6 6 0 1 1 0 12h-1.79zM12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      />
      <path
        fill="currentColor"
        d="M9 2a7 7 0 0 0-7 7v9h14v-9a7 7 0 0 0-7-7zm12 14h-2.17a.5.5 0 0 1-.64-.49l-2.24-2.24a.5.5 0 0 1 .26-.75l3-3a.5.5 0 0 1 .75.26l2.24 2.24a.5.5 0 0 1-.49.64z"
      />
    </svg>
  );
};

export { ResumeIcon };
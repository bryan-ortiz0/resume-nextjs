import React from "react";

const ResumeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 1 10 10v6h2v-6a8 8 0 1 0-16 0v6h2v-6a10 10 0 0 1 10-10zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      />
      <path
        fill="currentColor"
        d="M9 2a7 7 0 0 0-7 7v9h14v-9a7 7 0 0 0-7-7zm12 14h-2.17a.5.5 0 0 1-.64-.49l-2.24-2.24a.5.5 0 0 1 .26-.75l3-3a.5.5 0 0 1 .75.26l2.24 2.24a.5.5 0 0 1-.49.64z"
      />
    </svg>
  );
};

export { ResumeIcon };
import React from "react";

const ResumeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M20.77 11.9h-15.4v-1.5h13.27l2.13-2.13zM16.6 5.9c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L8.6 6.1c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l8.8 8.8c.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0L5.1 11.3c-.6-.6-.6-1.5 0-2.1.3-.3.7-.45 1.1-.45.3 0 .6.15 1.1.45L13.9 5.9z"
      />
    </svg>
  );
};

export { ResumeIcon };
import React from "react";

const ResumeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M18.42 19.57L14.13 15.28c-1.12-.84-3.06-1.54-5.13-1.54-4.05 0-7.33 3.3-7.33 7.5s3.28 7.5 7.33 7.5c2.07 0 3.95-.7 5.13-1.54L19.87 22.43c.39.36.39 1.01 0 1.37zM12 11.75c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
      />
    </svg>
  );
};

export default ResumeIcon;
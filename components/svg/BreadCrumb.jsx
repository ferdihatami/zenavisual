import React from "react";

const BreadCrumb = () => {
  return (
    <>
      <svg
        class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
    </>
  );
};

export default BreadCrumb;

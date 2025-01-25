import * as React from "react"
const Close = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
    />
  </svg>
)
export default Close
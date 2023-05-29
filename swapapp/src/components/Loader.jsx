import React from 'react'

const Loader = () => {
  return (
    <svg width="25px" height="25px" viewBox="0 0 50 50">
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      stroke="#E9D5F7"
                      strokeWidth="4"
                      strokeDasharray="0 125.66"
                      transform="rotate(-90 25 25)"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        values="0 125.66; 125.66 125.66"
                        keyTimes="0; 1"
                        dur="2s"
                        repeatCount="indefinite"
                      ></animate>
                    </circle>
                  </svg>
  )
}

export default Loader
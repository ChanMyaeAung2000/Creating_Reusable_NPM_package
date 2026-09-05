// // import React from 'react'; // Optional in React 17+ with new JSX transform

// const MyButton = ({ children, ...props }) => {
//   return (
//     <button
//       className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default MyButton;
import React from 'react';

const MyButton = ({ children,textColor = "#ffffff", hoverTextColor = "#e2e8f0", bgColor = "#3b82f6", hoverBgColor = "#1d4ed8", ...props }) => {
  return (
    <button
      
      style={{
        '--custom-bg': bgColor,
        '--custom-hover-bg': hoverBgColor,
        '--custom-text': textColor,
        '--custom-hover-text': hoverTextColor,
      }}
      
      className="bg-[var(--custom-bg)] hover:bg-[var(--custom-hover-bg)] text-[var(--custom-text)] hover:text-[var(--custom-hover-text)] font-bold py-2 px-4 rounded transition-colors"
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
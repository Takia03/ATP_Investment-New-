export function Button({ variant, children, className, ...props }) {
    const styles = {
      outline: "border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-2 focus:ring-blue-300 rounded-[20px]", // Added border-radius for outline
      ghost: "text-black-500 bg-transparent hover:bg-transparent", // Made background transparent for ghost
    };
  
    return (
      <button
        className={`p-2 text-sm font-medium transition duration-150 ease-in-out focus:outline-none ${styles[variant] || ""} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
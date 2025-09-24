
function Button({
  children,
  type='button',
  bgColor = "bg-green-900",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return(
    <button  className={`px-4  green-900 py-2 rounded-lg ${bgColor} ${className} ${textColor}`}
    type ={type}
    {...props}>
      {children}
    </button>
  )
}

export default Button


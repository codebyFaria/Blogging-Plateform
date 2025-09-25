
function Button({
  children,
  type='button',
  bgColor = "bg-black",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return(
    <button  className={`px-4  cursor-pointer green-900 py-2 rounded-lg ${bgColor} ${className} ${textColor}`}
    type ={type}
    {...props}>
      {children}
    </button>
  )
}

export default Button


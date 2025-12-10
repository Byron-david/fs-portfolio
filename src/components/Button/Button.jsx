import styles from './Button.module.css'; 

function Button({ text = "x",
                  handleClick,
                  href,
                  className = styles.buttonDefault, 
                  backgroundColor,
                  color
                }) 
  {

  const combinedClasses = `${styles.buttonDefault} ${className || ''}`;

  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
  }

  if (href) {
      return (
        <a
          href={href} 
          className={combinedClasses} 
          style={buttonStyle}
        >
          {text}
        </a>
      );
    }

  return (
    <button style={buttonStyle} className={combinedClasses} onClick={handleClick}>{text}</button>
  )
}

export default Button

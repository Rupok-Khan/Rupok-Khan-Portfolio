function Button({text, type = "primary", href, target}) {
    return(
      <a className={`btn ${type}`} href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
        {text}
      </a>
    );

}
export default Button;

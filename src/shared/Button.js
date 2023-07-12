import { h } from 'preact';


function Button({ children, htmlType = "button", type = "primary", fullWidth, ...props }) {
  
  return (
    <button type={htmlType} className={`anwg-button anwg-button_type-${type} ${fullWidth ? "anwg-button_full-width" : ""}`} { ...props }>
      { children }
    </button>
  );
}

export default Button;

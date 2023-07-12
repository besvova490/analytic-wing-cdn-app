import { h } from 'preact';

// components
import LabelError from './LabelError';

function Input({ label, ...props }) {


  return (
    <LabelError label={label}>
      <input className="anwg-input" { ...props }/>
    </LabelError>
  );
}

export default Input;

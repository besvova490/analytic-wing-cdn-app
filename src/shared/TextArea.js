import { h } from 'preact';

// components
import LabelError from './LabelError';

function TextArea({ label, ...props }) {

  return (
    <LabelError label={label}>
      <textarea className="anwg-textarea" { ...props }/>
    </LabelError>
  );
};

export default TextArea;

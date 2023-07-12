import { h } from 'preact';


function LabelError({ children, label, error }) {
  return (
    <div className="anwg-label-error">
      {
        label && (
          <span className="anwg-label-error__label">
            { label }
          </span>
        )
      }
      { children }
      {
        error && (
          <span className="anwg-label-error__error">
            { error }
          </span>
        )
      }
    </div>
  );
}

export default LabelError;

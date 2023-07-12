import { h } from 'preact';


function Modal({ open, children, onClose, title }) {

  return (
    <div
      className={`anwg-modal ${open ? "anwg-modal_open" : ""}`}
      style={{ display: open ? "flex" : "none" }}
      before
    >
      <div className="anwg-modal__content">
        <div className="anwg-modal__header">
          <h2 className="anwg-modal__title">{ title }</h2>
          <button className="anwg-modal__close" onClick={ onClose }>X</button>
        </div>
        <div className="anwg-modal__body">
          { open && children }
        </div>
      </div>
    </div>
  );
}

export default Modal;

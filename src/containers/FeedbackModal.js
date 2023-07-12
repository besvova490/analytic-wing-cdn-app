import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';


// components
import Modal from '../components/Modal';
import LogoIconBlue from '../components/icons/LogoIconBlue';
import CheckIcon from '../components/icons/CheckIcon';

// elements
import Input from '../shared/Input';
import TextArea from '../shared/TextArea';
import Button from '../shared/Button';

// helpers
import feedback from '../api/feedback';


function FeedbackModal({ onClose, ...props }) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    feedback.post({
      email: formData.get('email'),
      feedback: formData.get('feedback'),
    }).finally(() => setIsSuccess(true));
  }

  return (
    <Modal
      { ...props }
      title={<div className="anwg-feedback-modal__title"><LogoIconBlue/> Send as Feedback</div>}
      onClose={onClose}
    >
      <form className="anwg-feedback-modal" onSubmit={handleSubmit}>
        {
          isSuccess
            ? (
              <div className="anwg-feedback-modal__success">
                <div className="anwg-feedback-modal__success-icon">
                  <CheckIcon/>
                </div>
                <p className="anwg-feedback-modal__success-text">
                  Thank you for your feedback! We will get back to you as soon as possible.
                </p>
              </div>
            )
            : (
              <Fragment>
                <div className="anwg-feedback-modal__form">
                  <Input
                    label="Please enter your email"
                    placeholder="Please enter your email"
                    name="email"
                  />
                  <TextArea
                    label="Please enter your feedback"
                    placeholder="Please enter your feedback"
                    name="feedback"
                    rows="5"
                  />
                </div>
                <div className="anwg-feedback-modal__footer">
                  <Button type="default" fullWidth onClick={onClose}>Cancel</Button>
                  <Button htmlType="submit" fullWidth>Send</Button>
                </div>
              </Fragment>
            )
        }
      </form>
    </Modal>
  )
}

export default FeedbackModal;

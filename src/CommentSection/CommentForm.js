import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  initialText = '',
  initialName = '',
  handleCancel
}) => {
  const [text, setText] = useState(initialText);
  const [name, setName] = useState(initialName);
  const isTextareaDisabled = text.length === 0 || name.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text, name); 
    setText("");
    setName("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="comment-form-name-input"
      />
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
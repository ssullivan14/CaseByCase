import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ caseId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <div className="post-form">
      <div className="post-form-header">
        <h5>Leave a Comment</h5>
      </div>
      <form
        className="form my-1"
        onSubmit={e => {
          e.preventDefault();
          addComment(caseId, { text });
          setText("");
        }}
      >
        <textarea
          className="form-control post-control"
          name="text"
          cols="30"
          rows="5"
          placeholder="Comment on this topic."
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input
          type="submit"
          className="btn btn-secondary my-1"
          value="Submit"
        />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);

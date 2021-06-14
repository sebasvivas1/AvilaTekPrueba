import Comment from "../channel-page/comment";

function NewComment() {
  async function addCommentHandler(enteredCommentData) {
    const response = await fetch("/api/comments", {
      method: "UPDATE",
      body: JSON.stringify(enteredCommentData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  }

  //   return <Comment onAddComment={addCommentHandler} />;
  return;
}

export default NewComment;

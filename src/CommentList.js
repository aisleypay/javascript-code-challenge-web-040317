class CommentList {
  constructor(commentsList) {
    this.commentsList = []
  }

  render() {
    var html = "<ul>"

    this.commentsList.map(function(comment) {
      html += comment.render()
    })

    html += "</ul>"
    return html
  }

  addComment(string) {
    var comment = new Comment(string)
    this.commentsList.push(comment)
  }
}

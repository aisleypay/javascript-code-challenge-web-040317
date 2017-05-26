$(document).ready(function() {
  var comments = new CommentList()

  $("#note-form").submit(function(e) {
    e.preventDefault()

    var comment = $("#comment-text").val()
    $("#note-form").trigger("reset")

    comments.addComment(comment)

    $("#comment-list").html("")
    var html = `${comments.render()}`
    
    $("#comment-list").append(html)
  })
})

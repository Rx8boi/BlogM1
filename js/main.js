$(function () {

  var $posts = $('#posts');
  var $title = $('#title');
  var $body = $('#body');

  // $.ajax({
  //   type: "GET",
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   success: function (posts) {
  //     // console.log('success', posts);
  //     $.each(posts, function (i, post) {
  //       $posts.append('<li><h4>'+ post.title +'</h4></br><p>'+ post.body +'</p></li>')
  //     })
  //   }
  // });

  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts?userId=1",
    success: function (posts) {
      // console.log('success', posts);
      $.each(posts, function (i, post) {
        $posts.append(
          "<li id='entry'><a href='#' target='_blank'><h4>" + post.title + "</h4></a></br><p>" + post.body.substring(0, 15)+'...' + "</p></li>"
        );
      });
    },
    error: function () {
      alert('Error: Posts not found!');
    }
  });

  $('#add-post').on('click', function () {
    
    var post = {
      title: $title.val(),
      body: $body.val(),
      userId: 1,
    };

    $.ajax({
      type: 'POST',
      url: "https://jsonplaceholder.typicode.com/posts?userId=1",
      data: post,
      success: function (newPost) {
        $posts.append(
          "<li id='entry'><a href='#' target='_blank'><h4>" + newPost.title + "</h4></a></br><p>" + newPost.body.substring(0, 15)+'...' + "</p></li>"
        );
      }
    })
    
  })


});
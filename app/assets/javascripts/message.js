$(function(){
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                        </div>
                  <div class="upper-message__date">
                    ${message.date}
                      </div>
                        </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${content}
                      ${img}
                      </p>
                    </div>
                  </div>`
    return html;
  }
  
    $('#new_message').on('submit', function(e){
      e.preventDefault();
      var message = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({  
        url: url,
        type: 'POST',
        data: message,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        var html = buildHTML(data);
        $('.messages').append(html);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
        $("form")[0].reset();
      })
      
      .fail(function(data){
        alert('エラーが発生したためメッセージは送信できませんでした。');
      })
      .always(function(data){
        $('.form__submit').prop('disabled', false);
      })
    })
    var reloadMessages = function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)){
      last_message_id = $('.message:last').data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      })
      .fail(function() {
        console.log('error');
      });
    };
  };
    setInterval(reloadMessages, 7000);
  });

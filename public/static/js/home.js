let currentUser, users;

/**
 * Remove item excluído
 */
function onRemoveItem(id) {
  $(`#user_${id}`).remove()
}

/**
 * Realiza uma requisição HTTP para remover o usuário do sistema.
 */
function onDelete(id) {
  $.ajax({
    url: `/server/users/${id}`,
    type: 'DELETE',
    success: onRemoveItem(id)
  })
}

/**
 * Obtém o usuário atual e os usuários do sistema para renderizar na tela.
 * O item que representa o mesmo usuário da sessão tem o botão de exclusão desabilitado.
 */
$.get('/server/users/me', function(data, status) {
  currentUser = data
  $('.welcome').text(`Bem-vindo ${currentUser.username}`)

  $.get('/server/users', function(data, status) {
    users = data
  
    const content = $('div.content')
    $(data).each(function(i, val) {
      const item = $('<div />')
      const itemHeader = $('<div />')
      const itemBody = $('<div />')
      const itemBodyContent = $('<div />')
      const itemTitle = $('<p />')
      const itemFullName = $('<p />')
      const deleteButton = $('<button />')
  
      itemTitle.text(val.username)
      itemTitle.addClass('title')
      itemFullName.text(`${val.firstName} ${val.lastName}`)
      
      itemHeader.addClass('item-header')
      itemHeader.append(itemTitle)
  
      itemBodyContent.addClass('item-body-content')
      itemBodyContent.append(itemFullName)
  
      deleteButton.addClass('delete')
      deleteButton.text('Excluir')
      deleteButton.attr('disabled', val.id === currentUser.id)
      deleteButton.on('click', function() { onDelete(val.id) })
  
      itemBody.addClass('item-body')
      itemBody.append(itemBodyContent)
      itemBody.append(deleteButton)
  
      
      item.attr('id', `user_${val.id}`)
      item.addClass('item')
      item.append(itemHeader)
      item.append(itemBody)
      
  
      content.append(item)
    })
  })
  
})


/**
 * Envia para o servidor a requisição para matar a sessão.
 */
$('button.signOut').on('click', function() { 
  window.location.replace('/signOut')
})

/**
 * Vai para a rota de registro de um novo usuário
 */
$('button.new').on('click', function() { 
  window.location.replace('/users/new')
})
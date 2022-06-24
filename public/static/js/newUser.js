/**
 * Obtém a query string de erro e verifica se ela é do tipo username 
 * para apresentar a mensagem de erro para o usuário.
 */
const [key, value] = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')
if (key === 'error' && value === 'username') {
  $('#warning').text('Já existe um usuário com esse nome de usuário')
}


$('input.go-back').on('click', function() { 
  window.location.replace('/home')
})
const [key, value] = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')

if (key === 'error' && value === 'username') {
  $('#warning').text('Já existe um usuário com esse nome de usuário')
}


$('input.go-back').on('click', function() { 
  window.location.replace('/home')
})
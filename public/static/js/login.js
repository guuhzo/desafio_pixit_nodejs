const [key, value] = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')

if (key === 'error' && value === 'credentials') {
  $('#warning').text('Credenciais inválidas')
}

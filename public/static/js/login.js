/**
 * Obtém a query string de erro e verifica se ela é do tipo credentials 
 * para apresentar a mensagem de erro para o usuário.
 */
const [key, value] = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')
if (key === 'error' && value === 'credentials') {
  $('#warning').text('Credenciais inválidas')
}

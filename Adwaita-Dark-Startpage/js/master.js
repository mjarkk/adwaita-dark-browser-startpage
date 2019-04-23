let search = document.querySelector('.ddg_search')
let searchButton = document.querySelector('.ddg_search_button')

search.focus()

searchButton.onclick = function(event) {
  doASearch()
}

search.onkeydown = function(event) {
  if (event.key == 'Enter') {
    doASearch()
  }
}

function doASearch() {
  location.href = 'https://duckduckgo.com/?q=' + search.value.replace(/\s/g, '+')
}

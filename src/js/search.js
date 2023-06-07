const params = new URLSearchParams(window.location.search)
const id = params.get('id')

console.log(id);

if (id != undefined && id != null && id != '') {
  document.querySelector('#searchBox').classList.value = "dpTog"
}
if(window.innerWidth <= 700){
  const titles = document.querySelectorAll('.useful-information-column__title')
  const lists = document.querySelectorAll('.useful-information-column__list')
  titles.forEach(title => {
    title.addEventListener('click', ()=> {
      titles.forEach(item => {
        item.classList.remove('active')
      })
      lists.forEach(list => {
        list.classList.remove('active')
      })
      const columnItem = title.closest('.useful-information-column')
      const columnList = columnItem.querySelector('.useful-information-column__list')
      console.log(columnItem)
      columnList.classList.toggle('active')
      columnItem.classList.toggle('active')
    })
  })
}

import React from 'react'
import style from './paginator.module.css'

const Paginator = ({totalUserCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize) //логика пагинации
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  let curP = currentPage;
  let curPF = ((curP - 5) < 0) ? 0 : curP - 5
  let curPL = curP + 5
  let slicedPages = pages.slice(curPF, curPL);

  return (
      <div className={style.pagination}>
        {slicedPages.map(p => {
          return <span className={currentPage === p ? style.selectedPage : style.unselectedPage}
            onClick={(e) => { onPageChanged(p) }} >{p} </span> //отображение пагинации
        })}
    </div>
    )
}

export default Paginator
import React from 'react'
import { useState } from 'react'
import style from './paginator.module.css'

const Paginator = ({ totalUserCount, pageSize, currentPage, onPageChanged, portionSize = 5 }) => {

  let pagesCount = Math.ceil(totalUserCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPorionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPorionPageNumber = portionNumber * portionSize

  return (
    <div className={style.pagination}>
      {portionNumber > 1 &&
        <button className={style.btn} onClick={() => { setPortionNumber(portionNumber - 1) }}> {"<"} </button>}

      {pages
        .filter(p => p >= leftPorionPageNumber && p <= rightPorionPageNumber)
        .map((p) => {
          return <span className={currentPage === p ? style.selectedPage : style.unselectedPage}
            key={p}
            onClick={(e) => { onPageChanged(p) }}>{p}</span>
        })}

      {portionCount > portionNumber &&
        <button className={style.btn} onClick={() => { setPortionNumber(portionNumber + 1) }}>{">"}</button>}
    </div>
  )
}

export default Paginator
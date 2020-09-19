import React from 'react'
import Button from '../../components/button'

import './style.scss'
export default function Pagination({
  page,
  totalPages,
  onChangePage,
  ...props
}) {

  function renderPages() {
    let pages = []
    for (let i = 0; i < totalPages; i++) {
      pages.push({ label: i + 1, value: i })
    }
    return (
      <>
        {pages.map(p =>
          <Button
            onClick={() => onChangePage(p.value)}
            disabled={p.value === page}
            key={p.value}
          >
            {p.label}
          </Button>)}
      </>
    )
  }

  return (
    <div className='pagination' {...props}>
      {renderPages()}
    </div>
  )
}

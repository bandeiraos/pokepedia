import React, { useEffect, useState } from 'react'
import Button from '../../components/button'
import List from '../../containers/list'
import Loader from '../../components/loader'
import Pagination from '../../containers/pagination'
import { useAppCtx } from '../../contexts/app'
import { getList } from '../../services/api'
import './style.scss'

const resultsPerPage = 15

export default function Home() {

  const [listData, setListData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { page, changePageCtx } = useAppCtx()

  useEffect(() => {
    loadPokemons()
  }, [page])

  async function loadPokemons() {
    setIsLoading(true)
    const data = await getList(page, resultsPerPage)
    if (data) setListData(data)
    setIsLoading(false)
  }

  function renderResults() {
    const { results } = listData

    return (
      <div className='results-wrapper'>
        {
          !results.length ?
            <p>Nenhum resultado a ser exibido</p>
            :
            <div>
              {renderPageInfo()}
              <List
                items={results}
              />

              {renderPagination()}
            </div>
        }
      </div>
    )
  }

  function renderPageInfo() {
    return (
      <div className='page-info'>
        <Button disabled={!listData.previous} onClick={() => changePageCtx(page => page - 1)}>prev</Button>
        <span>Page {page + 1}</span>
        <Button disabled={!listData.next} onClick={() => changePageCtx(page => page + 1)}>next</Button>
      </div>
    )
  }

  function renderPagination() {
    return (
      <>
        <Pagination
          page={page}
          totalPages={listData.count / resultsPerPage}
          onChangePage={(val) => changePageCtx(val)}
        />
      </>
    )
  }

  return (
    <div className='home-wrapper'>
      {
        isLoading ?
          <Loader />
          :
          listData ? renderResults()
            : <p>Erro ao carregar lista, tente novamente</p>
      }

    </div>
  )
}

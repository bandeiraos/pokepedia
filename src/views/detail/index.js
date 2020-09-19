import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import InfoBox from '../../components/info-box'
import Loader from '../../components/loader'
import StatBar from '../../components/stat-bar'
import Tag from '../../components/tag'
import AvatarRotator from '../../containers/avatar-rotator'
import { getPokemon } from '../../services/api'
import { correctStr } from '../../utils'

import './style.scss'
export default function Detail(location) {

  const [pokename] = useState(location.match.params.name)
  const [pokeData, setPokeData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    loadPokeData()
  }, [pokename])

  async function loadPokeData() {
    setIsLoading(true)
    const resp = await getPokemon(pokename)
    if (resp)
      setPokeData(resp)

    setIsLoading(false)
  }

  function renderData() {
    return (
      <div className="poke-info">
        {renderHeaderInfo()}
        {renderMidInfo()}
        {renderStats()}
      </div>
    )
  }

  function renderHeaderInfo() {
    const { name, types, sprites, order } = pokeData
    const { back_default, front_default } = sprites
    return (
      <div className='pi-head'>
        <AvatarRotator
          frontImg={front_default}
          backImg={back_default}
        />

        <div className='pi-head-info'>
          <span className='order'>#{order} </span>
          <h1>{correctStr(name)}</h1>
          <div className='types'>
            {types.map(({ type }) => <Tag key={type.name} title={correctStr(type.name)} />)}
          </div>
        </div>
      </div>
    )
  }

  function renderMidInfo() {
    const { height, weight, abilities } = pokeData

    return (
      <div className='pi-mid'>
        <InfoBox title='Abilities'>
          {abilities.map(({ ability: a }) =>
            <span key={a.name}>{correctStr(a.name)}</span>
          )}
        </InfoBox>
        <InfoBox title='Height'>
          <span>{height * 10} cm</span>
        </InfoBox>
        <InfoBox title='Weight'>
          <span>{weight} kg</span>
        </InfoBox>
      </div>
    )
  }

  function renderStats() {
    const { stats } = pokeData
    return (
      <div className='pi-stats'>
        <InfoBox title='Stats'>
          {stats.map(({ base_stat, stat }) =>
            <StatBar key={stat.name} value={base_stat} title={stat.name} />
          )}
        </InfoBox>
      </div>
    )
  }

  return (
    <div className='detail-wrapper'>
      <Link className='button' to='/'>Back</Link>

      {
        isLoading ? <Loader />
          :
          pokeData ? renderData() : <p>Erro ao carregar informações, tente novamente.</p>
      }
    </div>
  )
}

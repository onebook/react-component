'use strict'

import InfiniteList from '../lib/infinite-list'
import { genSquare, addList } from './support'
import React from 'react'

window.init = () => {
  let node = document.querySelector('#infinite-list-container')

  let list = [{
    title: 'hello'
  }, {
    title: 'hello'
  }, {
    title: 'hello'
  }]

  React.render(
    <InfiniteList
      className='container'
      addItem={genSquare}
      addList={addList}
      delay={2000}
      list={list}
    ></InfiniteList>, node)
}

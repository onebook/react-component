'use strict'

function genSquare(data, index) {
  let style = {
    display: 'inline-block',
    margin: '2px',
    width: '300px',
    height: '300px',
    border: '1px red solid'
  }

  return (
    <span style={style}>{index}:{data.title}</span>
  )
}

function addList() {
  let items = [{
    title: 'hello'
  }, {
    title: 'hello'
  }, {
    title: 'hello'
  }]

  return Promise.resolve(items)
}

export {
  genSquare,
  addList
}

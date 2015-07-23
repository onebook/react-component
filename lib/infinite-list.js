'use strict'

import { isBottom, timeout } from './util'

/**
 * props:
 *   - list {Array}
 *   - delay {Number}
 *   - className {String}
 *   - addList {Function} (return Promise)
 *   - addItem {Function}
 */

class InfiniteList extends React.Component {
  static defaultProps = {
    deley: 100,
    list: []
  }

  constructor(props) {
    if (typeof props.addList !== 'function') {
      throw new Error('invalid props: addList')
    }

    if (typeof props.addItem !== 'function') {
      throw new Error('invalid props: addItem')
    }

    super(props)

    this.loading = false

    this.state = {
      list: props.list
    }
  }

  componentDidMount() {
    this._handleScroll = this.handleScroll.bind(this)
    window.addEventListener('scroll', this._handleScroll)
  }

  componentWillUnmount() {
    if (this._handleScroll) {
      window.removeEventListener('scroll', this._handleScroll)
    }
  }

  handleScroll() {
    if (isBottom() && !this.loading) {
      this.loading = true

      this.props
        .addList()
        .then((items) => {
          return timeout(this.props.delay, items)
        })
        .then((items) => {
          this.loading = false

          this.state.list = this.state.list.concat(items)

          this.setState({
            list: this.state.list
          })
        })
        .catch((err) => {
          this.loading = false
          console.error(err)
        })
    }
  }

  render() {
    const className = this.props.className || ''

    return (
      <div className={className}>
        {
          this.state.list.map((item, index) => {
            return this.props.addItem(item, index)
          })
        }
      </div>
    )
  }
}

/**
 * export
 */

export default InfiniteList

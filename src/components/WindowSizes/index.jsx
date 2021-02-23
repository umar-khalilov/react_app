import React, { Component } from 'react'

class WindowSizes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleSize)
  }

  handleSize = () => {
    this.setState({ x: window.innerWidth, y: window.innerHeight })
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleSize)
  }

  render () {
    const { x, y } = this.state
    return (
      <div>
        Current window sizes are: x - {x} y - {y}
      </div>
    )
  }
}

export default WindowSizes

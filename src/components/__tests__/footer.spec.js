import React from 'react'
import { create } from 'react-test-renderer'
import Footer from '../Footer'
const theme = require('../../theme/theme.json')

describe('Footer Component', () => {
  it('renders correctly', () => {
    const tree = create(<Footer theme={theme} html={`<ul><li>test</li></ul>`} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
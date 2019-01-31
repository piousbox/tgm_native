import React from 'react'
import { createStackNavigator, createAppContainer, } from 'react-navigation'

import renderer from 'react-test-renderer'
global.navigator = {
  userAgent: 'node.js'
}

import Component from '../CaseStudiesScreen'

test('renders correctly', () => {
  const tree = renderer.create(<Component navigation={{}} />).toJSON();
  expect(tree).toMatchSnapshot();
})
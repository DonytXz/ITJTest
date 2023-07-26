import React from 'react'
import Problem from './Problem'

describe('<Problem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Problem />)
  })
})
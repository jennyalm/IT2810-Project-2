import React from 'react'
import renderer from 'react-test-renderer'


import TabContent from "../components/TabContent"

    test('TabContent snapshot test', () => {

    const tree = renderer.create(<TabContent />)

    expect(tree).toMatchSnapshot()

})
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../App';

test('App snapshot test', () => {



    const tree = renderer.create( <App/> ).toJSON();

    expect(tree).toMatchSnapshot();
});
import React from 'react'
import renderer from 'react-test-renderer'

import AudioPlayer from '../components/AudioPlayer';

test('AudioPlayer snapshot test', () => {



    const tree = renderer.create( <AudioPlayer/> ).toJSON();

    expect(tree).toMatchSnapshot();
});
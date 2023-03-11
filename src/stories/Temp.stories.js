import React from 'react'
import { storiesOf } from '@storybook/react'

import Temp from '../components/Temp'

const stories = storiesOf('App Test', module)

stories.add('App', () => {
	return <Temp name='Javi' />
})

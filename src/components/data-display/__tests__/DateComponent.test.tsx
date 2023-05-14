import { cleanup, render } from '@testing-library/react'
import DateComponent from '../DateComponent'

afterEach(cleanup)

test('should render AboutSKC component', () => {
	render(<DateComponent year={1} month='222' day={11} />)
})

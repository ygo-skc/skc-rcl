import { render, screen } from '@testing-library/react'
import AtkDef from '../AtkDef'
import React from 'react'

describe('Attack/Defense component should render correctly', () => {
	it('Attack/Defense Component with null attack and defense and non-link card color should render correctly', () => {
		render(<AtkDef cardColor='Fusion' />)

		const parent = screen.getByTestId('atk-def-component')
		expect(parent).toBeInTheDocument()
		expect(parent.classList.contains('monster-stat-parent')).toBe(true)
		expect(parent.childNodes.length).toBe(1)

		const subWrapper = screen.getByTestId('atk-def-wrapper')
		expect(subWrapper).toBeInTheDocument()
		expect(subWrapper.classList.contains('monster-stat-sub-parent')).toBe(true)
		expect(subWrapper.childNodes.length).toBe(2)

		const atkComponent = screen.getByTestId('atk-text')
		expect(atkComponent).toBeInTheDocument()
		expect(atkComponent.classList.contains('monster-attack-stat')).toBe(true)
		expect(atkComponent).toHaveTextContent('?')

		const defComponent = screen.getByTestId('def-text')
		expect(defComponent).toBeInTheDocument()
		expect(defComponent.classList.contains('monster-defense-stat')).toBe(true)
		expect(defComponent).toHaveTextContent('?')
	})

	it('Attack/Defense Component with null attack and defense and link card color should render correctly', () => {
		render(<AtkDef cardColor='Link' />)

		const parent = screen.getByTestId('atk-def-component')
		expect(parent).toBeInTheDocument()
		expect(parent.classList.contains('monster-stat-parent')).toBe(true)
		expect(parent.childNodes.length).toBe(1)

		const subWrapper = screen.getByTestId('atk-def-wrapper')
		expect(subWrapper).toBeInTheDocument()
		expect(subWrapper.classList.contains('monster-stat-sub-parent')).toBe(true)
		expect(subWrapper.childNodes.length).toBe(1)

		const atkComponent = screen.getByTestId('atk-text')
		expect(atkComponent).toBeInTheDocument()
		expect(atkComponent.classList.contains('monster-attack-stat')).toBe(true)
		expect(atkComponent).toHaveTextContent('?')

		const defComponent = screen.queryByTestId('def-text')
		expect(defComponent).toBeNull()
	})

	it('Attack/Defense Component with non-null attack and defense values and non-link card color should render correctly', () => {
		const monsterAtk = '1500'
		const monsterDef = '1000'

		render(<AtkDef cardColor='Fusion' monsterAtk={monsterAtk} monsterDef={monsterDef} />)

		const parent = screen.getByTestId('atk-def-component')
		expect(parent).toBeInTheDocument()
		expect(parent.classList.contains('monster-stat-parent')).toBe(true)
		expect(parent.childNodes.length).toBe(1)

		const subWrapper = screen.getByTestId('atk-def-wrapper')
		expect(subWrapper).toBeInTheDocument()
		expect(subWrapper.classList.contains('monster-stat-sub-parent')).toBe(true)
		expect(subWrapper.childNodes.length).toBe(2)

		const atkComponent = screen.getByTestId('atk-text')
		expect(atkComponent).toBeInTheDocument()
		expect(atkComponent.classList.contains('monster-attack-stat')).toBe(true)
		expect(atkComponent).toHaveTextContent(monsterAtk)

		const defComponent = screen.getByTestId('def-text')
		expect(defComponent).toBeInTheDocument()
		expect(defComponent.classList.contains('monster-defense-stat')).toBe(true)
		expect(defComponent).toHaveTextContent(monsterDef)
	})

	it('Attack/Defense Component with non-null attack and defense values and link card color should render correctly', () => {
		const monsterAtk = '1500'
		const monsterDef = '1000'

		render(<AtkDef cardColor='Link' monsterAtk={monsterAtk} monsterDef={monsterDef} />)

		const parent = screen.getByTestId('atk-def-component')
		expect(parent).toBeInTheDocument()
		expect(parent.classList.contains('monster-stat-parent')).toBe(true)
		expect(parent.childNodes.length).toBe(1)

		const subWrapper = screen.getByTestId('atk-def-wrapper')
		expect(subWrapper).toBeInTheDocument()
		expect(subWrapper.classList.contains('monster-stat-sub-parent')).toBe(true)
		expect(subWrapper.childNodes.length).toBe(1)

		const atkComponent = screen.getByTestId('atk-text')
		expect(atkComponent).toBeInTheDocument()
		expect(atkComponent.classList.contains('monster-attack-stat')).toBe(true)
		expect(atkComponent).toHaveTextContent(monsterAtk)

		const defComponent = screen.queryByTestId('def-text')
		expect(defComponent).toBeNull()
	})
})

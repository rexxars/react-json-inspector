import {describe, it, beforeEach, expect, afterEach} from 'vitest'
import {render, screen, cleanup} from '@testing-library/react'

import {JsonInspector} from '../src/JsonInspector'
import {data} from '../example/data'

describe('<JsonInspector />', () => {
  beforeEach(() => {
    render(<JsonInspector data-testid="json-inspector" data={data} />)
  })

  afterEach(() => {
    cleanup()
  })

  it('has .json-inspector class name', () => {
    const inspector = screen.getByTestId('json-inspector')
    expect(inspector).toHaveClass('json-inspector')
  })

  it('has only one root node', () => {
    const rootNodes = screen.getAllByTestId('leaf-root')
    expect(rootNodes).toHaveLength(1)
  })

  it('has the root expanded by default', () => {
    const rootNode = screen.getByTestId('leaf-root')
    expect(rootNode).toHaveAttribute('aria-expanded', 'true')
  })

  describe('root leaf', () => {
    it('has 46 child nodes', () => {
      const childNodes = screen.getAllByTestId('leaf-child')
      expect(childNodes).toHaveLength(46)
    })

    it('has all child nodes collapsed by default', () => {
      const childNodes = screen.getAllByTestId('leaf-child')
      childNodes.forEach((node) => {
        expect(node).toHaveAttribute('aria-expanded', 'false')
      })
    })

    it('has no nested root nodes', () => {
      const childNodes = screen.getAllByTestId('leaf-child')
      childNodes.forEach((node) => {
        expect(node).not.toHaveAttribute('data-root')
      })
    })
  })
})

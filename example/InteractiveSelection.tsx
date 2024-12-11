import type {MouseEvent, FocusEvent} from 'react'
import {JsonInspectorProps} from '../src/JsonInspector'

export const InteractiveSelection: JsonInspectorProps['interactiveLabel'] =
  function InteractiveSelection(props) {
    return (
      <input
        className="json-inspector__selection"
        value={props.value}
        size={Math.max(1, props.value.length)}
        spellCheck={false}
        onClick={onClick}
        onFocus={onFocus}
        onChange={onChange}
      />
    )
  }

function onClick(evt: MouseEvent) {
  evt.stopPropagation()
}

function onFocus(evt: FocusEvent) {
  if (evt.target instanceof HTMLInputElement) {
    evt.target.select()
  }
}

function onChange() {
  // no-op
}

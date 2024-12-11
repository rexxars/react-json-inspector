import {createRoot} from 'react-dom/client'

import '@rexxars/react-json-inspector/json-inspector.css'
import {JsonInspector} from '../src/JsonInspector'
import {InteractiveSelection} from './InteractiveSelection.js'
import {data} from './data.js'

createRoot(document.getElementById('inspector')!).render(
  <JsonInspector
    data={data}
    onClick={console.log.bind(console)}
    interactiveLabel={InteractiveSelection}
  />,
)

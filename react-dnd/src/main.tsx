import { render } from 'preact'
import { App } from './app'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

render(<DndProvider backend={HTML5Backend}>
    <App />
</DndProvider>, document.getElementById('app')!)

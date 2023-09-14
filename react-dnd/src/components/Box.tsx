import { CSSProperties } from 'preact/compat'
import { DragSourceMonitor, useDrag } from 'react-dnd'
import { DropResult } from './model'

interface IBoxProps {
    type: string
    dropped: (dropResult: DropResult, item: { type: string }) => void
}


const style: CSSProperties = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    float: 'left',
    color: "white"
}

const Box = ({ type, dropped }: IBoxProps) => {
    const [{ opacity }, drag] = useDrag(
        () => ({
            type: type,
            item: { type },
            end(item, monitor) {
                const dropResult = monitor.getDropResult() as DropResult
                if (monitor.didDrop()) {
                    dropped(dropResult, item)
                }
            },
            collect: (monitor: DragSourceMonitor) => ({
                opacity: monitor.isDragging() ? 0.4 : 1,
            }),
        }),
        [type],
    )
    return (
        <div ref={drag} style={{ ...style, opacity, ... { background: type } }}>
            {type}
        </div>
    )
}

export default Box

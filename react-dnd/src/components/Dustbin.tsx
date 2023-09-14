import { CSSProperties } from 'preact/compat'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './model'

interface IDustbinProps {
    name: string
    items: string[]
}

const style: CSSProperties = {
    height: '20rem',
    width: '25rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    border: "1px dashed gray"
}

function selectBackgroundColor(isActive: boolean, canDrop: boolean) {
    if (isActive) {
        return 'rgb(225, 225, 225)'
    } else if (canDrop) {
        return 'rgb(225, 225, 225)'
    } else {
        return 'white'
    }
}

const Dustbin = ({ name, items }: IDustbinProps) => {
    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
            accept: [
                ItemTypes.blue,
                ItemTypes.green,
                ItemTypes.red
            ],
            drop: () => ({
                name: name,
            }),
            collect: (monitor: any) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [name],
    )
    const isActive = canDrop && isOver
    const backgroundColor = selectBackgroundColor(isActive, canDrop)
    return (
        <div ref={drop} style={{ ...style, backgroundColor }}>
            <p>{name}</p>
            {items.map((type) => <span style={{ padding: "5px 25px", background: type, color: "#fff" }}>{type}</span>)}
        </div>
    )
}

export default Dustbin

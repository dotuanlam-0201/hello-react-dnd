import { useState } from "preact/hooks";
import Box from "./components/Box";
import Dustbin from "./components/Dustbin";
import { DropResult, DustbinTypes, ItemTypes } from "./components/model";
import update from "react-addons-update"

export const App = () => {
  const [blueItems, setBlueItems] = useState([] as string[])
  console.log("🚀 ~ file: app.tsx:9 ~ App ~ blueItems:", blueItems)


  const onDropped = (dropResult: DropResult, item: { type: string }) => {
    const newBlueItems = update(blueItems, {
      $push: [item.type]
    })
    setBlueItems(newBlueItems)
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Dustbin items={blueItems} name={DustbinTypes.green.name} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box dropped={onDropped} type={ItemTypes.blue} />
        <Box dropped={onDropped} type={ItemTypes.green} />
        <Box dropped={onDropped} type={ItemTypes.red} />
      </div>
    </>
  )
}

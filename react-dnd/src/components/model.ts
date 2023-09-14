export const ItemTypes = {
    red: "red",
    green: "green",
    blue: "blue"
}

export const DustbinTypes = {
    red: {
        key: "red",
        name: "Red Zone",
    },
    green: {
        key: "green",
        name: "Green Zone",
    },
    blue: {
        key: "blue",
        name: "Blue Zone",
    },
}
export interface DropResult {
    allowedDropEffect: string
    name: string
}
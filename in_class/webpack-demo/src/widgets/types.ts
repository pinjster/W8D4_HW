type GridUnit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface Containerable {
    attributes?: Containerable
    backgroundColor: string,
    color: string,
    borderColor: string, 
    borderRadius: string,
    borderStyle: string,
    borderWidth: string,
    zIndex: number
}

export {
    GridUnit,
    Containerable
}
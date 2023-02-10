export enum ColorType {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

export const getDirection = (type: ColorType) => {
    return type == ColorType.BLACK ? 1 : - 1
}

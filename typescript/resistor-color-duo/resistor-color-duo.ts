export class ResistorColor {
  private colors: string[]

  constructor(colors: string[]) {
    this.colors = colors

    if (colors.length < 2) throw new Error("At least two colors need to be present");
  }

  value = (): number => {
    let values: string
    values = String(COLORS.indexOf(this.colors[0])) + String(COLORS.indexOf(this.colors[1]))

    return Number(values)
  }

}

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]

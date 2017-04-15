export interface Data {
  text: string | number | Date;
  value: number;
}


export const BarData: Data[] = [
  { text: 'a', value: .5 },
  { text: 'b', value: .9 },
  { text: 'c', value: 1.0 },
  { text: 'd', value: 2.0 },
  { text: 'e', value: 0.4 },
  { text: 'f', value: .2 }];

export const LineData: Data[] = [
  {
    text: 1,
    value: 5
  }, {
    text: 20,
    value: 20
  }, {
    text: 40,
    value: 10
  }, {
    text: 60,
    value: 40
  }, {
    text: 80,
    value: 5
  }, {
    text: 100,
    value: 60
  }
]

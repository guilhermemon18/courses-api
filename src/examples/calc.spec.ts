//Por convenção arquivos de teste são nomeados com o sufixo spec.ts ou test.ts:

export function add(x: number, y: number) {
  return x + y;
}
describe('Initial test', () => {
  it('add function', () => {
    expect(add(1, 2)).toEqual(3);
  });
});

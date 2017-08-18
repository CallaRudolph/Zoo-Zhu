import { AnimalAgePipe } from './animal-age.pipe';

describe('AnimalAgePipe', () => {
  it('create an instance', () => {
    const pipe = new AnimalAgePipe();
    expect(pipe).toBeTruthy();
  });
});

import { TimeCounterPipe } from './time-counter.pipe';

describe('TimeCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeCounterPipe();
    expect(pipe).toBeTruthy();
  });
});

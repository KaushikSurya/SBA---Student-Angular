import { BranchCountPipe } from './branch-count.pipe';

describe('BranchCountPipe', () => {
  it('create an instance', () => {
    const pipe = new BranchCountPipe();
    expect(pipe).toBeTruthy();
  });
});

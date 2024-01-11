import { render } from '@testing-library/react';

import UserAnimeList from './user-anime-list';

describe('UserAnimeList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserAnimeList />);
    expect(baseElement).toBeTruthy();
  });
});

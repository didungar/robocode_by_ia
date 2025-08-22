import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from './Game';

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = render(<Game />);
  });

  it('should display the correct score', () => {
    expect(game.getByText('Score: 0')).toBeInTheDocument();
  });

  it('should update the score when a ball is hit', () => {
    const ball = game.queryByRole('ball');
    fireEvent.click(ball);
    expect(game.getByText('Score: 1')).toBeInTheDocument();
  });
});
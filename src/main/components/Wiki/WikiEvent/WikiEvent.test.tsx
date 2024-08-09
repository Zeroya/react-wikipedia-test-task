import {render, screen} from '@testing-library/react';
import WikiEvent from './WikiEvent';
import {WikipediaEventModel} from '../../../../models/wikipedia-event.model';

describe('WikiEvent', () => {
  it('renders an event with title and text', () => {
    const mockEvent: WikipediaEventModel = {
      year: 2020,
      text: 'Sample event text',
      pages: []
    };

    render(<WikiEvent event={mockEvent} />);

    expect(screen.getByText('2020')).toBeInTheDocument();
    expect(screen.getByText('Sample event text')).toBeInTheDocument();
  });
});

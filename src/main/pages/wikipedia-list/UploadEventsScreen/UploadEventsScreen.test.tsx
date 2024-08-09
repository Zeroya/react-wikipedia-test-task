import {render, screen} from '@testing-library/react';
import UploadEventsScreen from './UploadEventsScreen';

describe('UploadEventsScreen', () => {
  it('renders the button when not loading', () => {
    render(<UploadEventsScreen loading={false} onUpload={() => {}} />);

    expect(screen.getByText("Click the button to see all of today's events from Wikipedia")).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /Upload events/i})).toBeInTheDocument();
  });

  it('renders a loading indicator when loading', () => {
    render(<UploadEventsScreen loading={true} onUpload={() => {}} />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});

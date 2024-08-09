import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WikiList from './WikiList';
import {renderWithProviders} from '../../../../helpers/test-utils';

describe('WikiList Component', () => {
  it('should display the upload button initially and then render the events container after fetching', async () => {
    renderWithProviders(<WikiList />);

    const uploadButton = screen.getByText('Upload events');
    expect(uploadButton).toBeInTheDocument();

    userEvent.click(uploadButton);

    await waitFor(
      () => {
        const eventsContainer = screen.getByTestId('events');
        expect(eventsContainer).toBeInTheDocument();
      },
      {timeout: 5000}
    );

    const events = screen.getAllByTestId(/^event-/);
    expect(events.length).toBeGreaterThan(0);
  });

  it('should render progress bar while fetching data', async () => {
    renderWithProviders(<WikiList />);

    const uploadButton = screen.getByText('Upload events');
    userEvent.click(uploadButton);

    await waitFor(() => {
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toBeInTheDocument();
    });
  });
});

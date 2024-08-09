import {WikipediaEventModel} from '../models/wikipedia-event.model';

export function sortEvents() {
  function sortEventsByYear(events: WikipediaEventModel[]): WikipediaEventModel[] {
    return events.sort((a, b) => b.year - a.year);
  }

  function sortEventsByPhoto(events: WikipediaEventModel[]): WikipediaEventModel[] {
    return events.map((event) => ({
      ...event,
      pages: [...event.pages].sort((a) => (a.thumbnail ? 1 : -1))
    }));
  }
  return [sortEventsByYear, sortEventsByPhoto];
}

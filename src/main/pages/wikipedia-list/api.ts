import {WikipediaEventResponseInterface} from '../../../interfaces/select-option.interface';
import {WikipediaEventModel} from '../../../models/wikipedia-event.model';
import axiosInstance from '../../../store/axiosInstance';

const WIKIPEDIA_EVENTS_API_URL = 'https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events';

const getOnThisDayEvents = (): Promise<WikipediaEventModel[]> => {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return axiosInstance
    .get<any, WikipediaEventResponseInterface>(`${WIKIPEDIA_EVENTS_API_URL}/${month}/${day}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.events);
};

export {getOnThisDayEvents};

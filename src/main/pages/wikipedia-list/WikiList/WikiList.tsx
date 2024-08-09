import {useMemo} from 'react';
import {useAppSelector, useAppDispatch} from '../../../../hooks/redux-hooks';
import UploadEventsScreen from '../UploadEventsScreen/UploadEventsScreen';
import {AppDispatch} from '../../../../store/store';
import {WikipediaEventModel} from '../../../../models/wikipedia-event.model';
import {getOnThisDayEvents} from '../api';
import {v4 as uuidv4} from 'uuid';
import {addWikipediaEvents} from '../../../../store/reducers/WikipediaEventsSlice';
import useLoading from '../../../../hooks/useLoading';
import useDebounce from '../../../../hooks/useDebounce';
import {sortEvents} from '../../../../services/sort.service';
import WikiEvent from '../../../components/Wiki/WikiEvent/WikiEvent';
import {showError} from '../../../../helpers/showMessage.helper';
import {errorMessages} from '../../../../helpers/messagesText';

function WikiList() {
  const wikipediaEvents: WikipediaEventModel[] = useAppSelector((state) => state.wikipediaEventState.wikipediaEvents);
  const dispatch: AppDispatch = useAppDispatch();
  const {loading, startLoading, stopLoading} = useLoading();
  const [sortByYear, sortByPhoto] = sortEvents();

  const fetchWikipediaList = async () => {
    try {
      dispatch(addWikipediaEvents(await getOnThisDayEvents()));
    } catch {
      showError(errorMessages.systemError, dispatch);
    } finally {
      stopLoading();
    }
  };

  const debouncedFetchWikipediaList = useDebounce(fetchWikipediaList, 1500); // used 'debounce' only to show loading circle clearly

  const handleUploadWikipediaEvents = async () => {
    startLoading();
    debouncedFetchWikipediaList();
  };

  const sortedWikipediaEvents = useMemo(() => {
    return sortByYear(sortByPhoto(wikipediaEvents));
  }, [wikipediaEvents]);

  return wikipediaEvents.length ? (
    <div data-testid="events" className="flex flex-col m-8">
      {sortedWikipediaEvents?.map((event) => <WikiEvent key={uuidv4()} event={event} />)}
    </div>
  ) : (
    <UploadEventsScreen loading={loading} onUpload={handleUploadWikipediaEvents} />
  );
}

export default WikiList;

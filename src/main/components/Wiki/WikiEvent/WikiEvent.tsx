import React from 'react';
import {WikipediaEventModel} from '../../../../models/wikipedia-event.model';
import WikiPage from '../WikiPage/WikiPage';

interface WikiEventProps {
  event: WikipediaEventModel;
}

const WikiEvent: React.FC<WikiEventProps> = ({event}) => {
  return (
    <div data-testid={`event-${event.year}`} className="bg-white shadow-md rounded-lg border-cyan-400 border-[1px] p-4 mb-4">
      <div className="w-full flex justify-center mb-2">
        <h2 className="font-bold text-white px-4 py-1 rounded-3xl text-3xl w-max bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600">{event.year}</h2>
      </div>
      <h3 className="text-xl font-bold mb-2 mx-2 text-center">{event.text}</h3>
      <div className="masonry sm:masonry-sm md:masonry-md">{event.pages?.map((page) => <WikiPage key={page.pageid} page={page} />)}</div>
    </div>
  );
};

export default WikiEvent;

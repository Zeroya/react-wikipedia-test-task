import React from 'react';
import {getLightRgbaColor} from '../../../../helpers/getLightRgbaColor';
import {PageModel} from '../../../../models/wikipedia-event.model';

interface WikiPageProps {
  page: PageModel;
}

const WikiPage: React.FC<WikiPageProps> = ({page}) => {
  const textColor = getLightRgbaColor();
  return (
    <div key={page.pageid} style={{backgroundColor: textColor}} className={`break-inside mb-4 ${!page.thumbnail ? 'full-width-masonry' : ''}`}>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        {page.thumbnail && <img src={page.thumbnail.source} alt={page.title} className="w-full h-auto object-cover" />}
        <div className="p-2">
          <h4 className="text-center font-bold text-lg">{page.title}</h4>
          <p className="text-center text-gray-600">{page.extract}</p>
        </div>
      </div>
    </div>
  );
};

export default WikiPage;

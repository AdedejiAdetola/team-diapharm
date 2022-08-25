import { createContext } from 'react';

export const FeatureContext = createContext();

const FeatureContextProvider = (props) => {
    const data = [
        {
            id: 1,
            title: 'G-Schedule',
            content: 'Keep track of your prescription times',
            imageUrl: 'g-schedule.svg'
        },

        {
            id: 2,
            title: 'G-Records',
            content: 'Monitor your numbers everytime, everyday',
            imageUrl: 'g-record.svg'
        },

        {
            id: 3,
            title: 'Hospital Finder',
            content: 'Find hospitals near you at any point in time',
            imageUrl: 'hospital-finder.svg'
        },

        {
            id: 4,
            title: 'G-News',
            content: 'Stay in the loop with accurate and timely info',
            imageUrl: 'g-news.svg'
        }
    ];

    return(
        <FeatureContext.Provider value={{data}}>
          {props.children}
        </FeatureContext.Provider>
      )
}


export default FeatureContextProvider;
import React, {useCallback, useContext, useMemo, useState} from 'react';
import {Adress} from '../components/record/models/Adress';

export enum Routes {
  HOME = 'Home',
  SETTINGS = 'Settings',
  RECORDS = 'Records',
}

interface IMainContext {
  selectedTab: Routes;
  recordList?: Adress[];
  setSelectedTab?: React.Dispatch<React.SetStateAction<Routes>>;
  setRecordList?: React.Dispatch<React.SetStateAction<Adress[]>>;
  lang?: 'en' | 'de';
  changeLang?: () => void;
}
const defaultContext: IMainContext = {
  selectedTab: Routes.HOME,
  lang: 'en',
};
const MainContext = React.createContext<IMainContext>(defaultContext);

export const MainProvider = ({children}: {children: React.ReactNode}) => {
  const [selectedTab, setSelectedTab] = useState(Routes.HOME);
  const [recordList, setRecordList] = useState<Adress[]>([]);
  const [lang, setLang] = useState<'en' | 'de'>('en');
  const changeLang = useCallback(() => {
    setLang(prev => (prev === 'en' ? 'de' : 'en'));
  }, []);
  const values = useMemo(
    () => ({
      selectedTab,
      recordList,
      setRecordList,
      setSelectedTab,
      changeLang,
      lang,
    }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedTab, recordList.length, changeLang, lang],
  );

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => {
  const ctx = useContext(MainContext);
  return ctx;
};

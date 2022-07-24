import React, {useCallback, useContext, useMemo, useState} from 'react';
import {Adress} from '../components/record/models/Adress';
import {LanguageOptions} from '../hooks/useTranslations';

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
  lang?: LanguageOptions;
  changeLang?: () => void;
  setRealtimeValidation?: React.Dispatch<React.SetStateAction<boolean>>;
  enableRealtimeValidation?: boolean;
}
const defaultContext: IMainContext = {
  selectedTab: Routes.HOME,
  lang: LanguageOptions.EN,
};
const MainContext = React.createContext<IMainContext>(defaultContext);

export const MainProvider = ({children}: {children: React.ReactNode}) => {
  const [selectedTab, setSelectedTab] = useState(Routes.HOME);
  const [recordList, setRecordList] = useState<Adress[]>([]);
  const [lang, setLang] = useState<LanguageOptions>(LanguageOptions.EN);
  const [enableRealtimeValidation, setRealtimeValidation] =
    useState<boolean>(true);
  const changeLang = useCallback(() => {
    setLang(prev =>
      prev === LanguageOptions.EN ? LanguageOptions.DE : LanguageOptions.EN,
    );
  }, []);
  const values = useMemo(
    () => ({
      selectedTab,
      recordList,
      setRecordList,
      setSelectedTab,
      changeLang,
      lang,
      enableRealtimeValidation,
      setRealtimeValidation,
    }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      selectedTab,
      recordList.length,
      changeLang,
      lang,
      enableRealtimeValidation,
    ],
  );

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => {
  const ctx = useContext(MainContext);
  return ctx;
};

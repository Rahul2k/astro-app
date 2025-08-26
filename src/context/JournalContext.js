import React, { createContext, useState, useEffect } from 'react';
import { loadEntries, saveEntries } from '../services/storage';
import { registerForPushNotificationsAsync, scheduleDailyReminder } from '../services/notificationService';
import { loadNotificationTime } from '../services/notificationConfigurationService';

export const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const [entries, setEntries] = useState({"August 24, 2025": "I did nothing :("});

  useEffect(() => {
    const bootstrapAsync = async () => {
      const storedEntries = await loadEntries();
      if (!!storedEntries) {
        setEntries({...entries, ...storedEntries});
      }
      await registerForPushNotificationsAsync();
      const notificationTime = await loadNotificationTime();
      await scheduleDailyReminder(notificationTime.hour, notificationTime.minute);
    };

    bootstrapAsync();
  }, []);

  const saveEntry = async (date, text) => {
    const newEntries = { ...entries, [date]: text };
    setEntries(newEntries); 
    await saveEntries(newEntries);
  };

  return (
    <JournalContext.Provider value={{ entries, saveEntry }}>
      {children}
    </JournalContext.Provider>
  );
};
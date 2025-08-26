import AsyncStorage from '@react-native-async-storage/async-storage';

const ENTRIES_KEY = 'journal_entries';

export const saveEntries = async (entries) => {
  try {
    const journalEntries = JSON.stringify(entries);
    await AsyncStorage.setItem(ENTRIES_KEY, journalEntries);
  } catch (e) {
    console.error("Failed to save entries.", e);
  }
};

export const loadEntries = async () => {
  try {
    const journalEntries = await AsyncStorage.getItem(ENTRIES_KEY);
    return journalEntries != null ? JSON.parse(journalEntries) : {};
  } catch (e) {
    console.error("Failed to load entries.", e);
    return {};
  }
};

import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIFICATION_TIME_KEY = 'journal_notification_time';
const DEFAULT_TIME = { hour: 18, minute: 0 };

export const saveNotificationTime = async (time) => {
  try {
    const notificationTime = JSON.stringify(time);
    await AsyncStorage.setItem(NOTIFICATION_TIME_KEY, notificationTime);
  } catch (e) {
    console.error("Failed to save notification time.", e);
  }
};

export const loadNotificationTime = async () => {
  try {
    const notificationTime = await AsyncStorage.getItem(NOTIFICATION_TIME_KEY);
    return notificationTime != null ? JSON.parse(notificationTime) : DEFAULT_TIME;
  } catch (e) {
    console.error("Failed to load notification time.", e);
    return DEFAULT_TIME;
  }
};

import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

const JOURNAL_NOTIFICATION_ID = "daily_journal_reminder";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const registerForPushNotificationsAsync = async () => {
  let token;
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.LOW,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }

  return token;
};

export const scheduleDailyReminder = async (hour, minute) => {
    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
    const reminderExists = scheduledNotifications.some(
        (notification) => notification.identifier === JOURNAL_NOTIFICATION_ID
    );

    if (reminderExists) {
        console.log("Daily reminder already scheduled. No action needed.");
        return;
    }
    await Notifications.cancelScheduledNotificationAsync(JOURNAL_NOTIFICATION_ID);
    await Notifications.scheduleNotificationAsync({
    content: {
      title: "Don't Forget Your Journal! ✍️",
      body: 'Take a moment to write down your thoughts/activities for the day.',
      sound: 'default',
    },
    trigger: {
      hour: hour,
      minute: minute,
      repeats: true,
    },
    identifier: JOURNAL_NOTIFICATION_ID,
  });
  console.log(`Notification scheduled daily for ${hour}:${minute}`);
};

export const cancelTodayReminder = async () => {
};
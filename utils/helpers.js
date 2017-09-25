import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'MobileFlashcards:notifications';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  console.log('createNotification called');

  return {
    title: 'Study your flashcards!',
    body: "Don't forget to log your stats for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  Notifications.addListener(x => {
    console.log('Notifications.addListener', x);
    console.log('Notifications.addListener', typeof x);
  });
  // clearLocalNotification();
  // console.log('setLocalNotification called');
  // Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
  //   console.log(status);
  // });
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      console.log('data', data);
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            console.log('I see granted');
            Notifications.cancelAllScheduledNotificationsAsync();

            let today = new Date();
            today.setDate(today.getDate());
            today.setHours(15, 36, 0);
            console.log(today);

            const notification = createNotification();
            console.log('notification', notification);

            Notifications.scheduleLocalNotificationAsync(notification, {
              time: today,
              repeat: 'day',
            }).then(result => {
              console.log('scheduleLocalNotificationAsync then', result);
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}

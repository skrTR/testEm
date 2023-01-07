import * as Notifications from "expo-notifications";

export const SchedulePushNotification = async (
  day,time, slot, type
) => {
  time = new Date(time.getTime() - 5 * 60000);
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = days.indexOf(day) + 1;
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: type,
      body: slot,
    },
    trigger: {
      weekday: weekday,
      hour: hours,
      minute: minutes,
      repeats:true
    },
    
  });
  console.log(id);
  return id
};

export async function cancelNotification(notifId: string){
  await Notifications.cancelScheduledNotificationAsync(notifId);
}

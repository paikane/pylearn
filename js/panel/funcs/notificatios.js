import { getToken } from "../../funcs/utils.js";

const insertNotificationHtmlTemplate = (notifications) => {
  const notificationModalListElem = document.querySelector(
    ".home-notification-modal-list"
  );
  const notificationsIconElem = document.querySelector("#notifications-icon");

  notificationModalListElem.innerHTML = "";

  if (notifications.length) {
    notificationsIconElem.classList.add("home-notification-active");
    notifications.forEach((notification) => {
      notificationModalListElem.insertAdjacentHTML(
        "beforeend",
        `
          <li class="home-notification-modal-item">
              <span class="home-notification-modal-text">${
                notification.msg
              }</span>
              <a onclick='seenNotification(${JSON.stringify(
                notifications
              )}, ${JSON.stringify(
          notification._id
        )})' class="seen">انجام شد</a>
          </li>
      `
      );
    });
  } else {
    notificationModalListElem.insertAdjacentHTML(
      "beforeend",
      `
      <li class="alert text-center none-notif-text ">
          هیچ پیامی وجود ندارد
      </li>
    `
    );
  }
};

const seenNotification = async (notifications, notificationID) => {
  const res = await fetch(
    `http://localhost:4000/v1/notifications/see/${notificationID}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  removeNotification(notifications, notificationID);

  const result = await res.json();
};

const removeNotification = (notifications, notificationID) => {
  const filteredNotifications = notifications.filter(
    (notification) => notification._id !== notificationID
  );

  insertNotificationHtmlTemplate(filteredNotifications);
};

export { insertNotificationHtmlTemplate, seenNotification };

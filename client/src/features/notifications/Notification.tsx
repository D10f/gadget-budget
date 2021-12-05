import React from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useAppSelector } from "../../common/hooks/useAppSelector";
import NotificationItem from "./NotificationItem";

const NotificationContainer = styled.aside`
  position: absolute;
  right: 0;
  top: 0;
  height: 99%;
  width: 40%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 2rem;
  z-index: ${({ theme }) => theme.depth.notifications};
  pointer-events: none;
`;

const Notifications = () => {
  const notifications = useAppSelector((state) => state.notifications);

  return createPortal(
    <NotificationContainer>
      <AnimatePresence>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            id={notification.id}
            msg={notification.msg}
            type={notification.type}
            duration={notification.duration}
          />
        ))}
      </AnimatePresence>
    </NotificationContainer>,
    document.getElementById("root")!
  );
};

export default Notifications;

import {
  NavContent,
  NavIcon,
  NavItem,
  NavLabel,
  NavList,
  NavListHeader,
  NavMenu,
  NavMenuToggle,
  NavNote,
} from '@navify/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'navicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inbox',
    url: '/page/Inbox',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Outbox',
    url: '/page/Outbox',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Favorites',
    url: '/page/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Archived',
    url: '/page/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Trash',
    url: '/page/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Spam',
    url: '/page/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <NavMenu contentId="main" type="overlay">
      <NavContent>
        <NavList id="inbox-list">
          <NavListHeader>Inbox</NavListHeader>
          <NavNote>kn145660@gmail.com</NavNote>
          {appPages.map((appPage, index) => {
            return (
              <NavMenuToggle key={index} autoHide={false}>
                <NavItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <NavIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <NavLabel>{appPage.title}</NavLabel>
                </NavItem>
              </NavMenuToggle>
            );
          })}
        </NavList>

        <NavList id="labels-list">
          <NavListHeader>Labels</NavListHeader>
          {labels.map((label, index) => (
            <NavItem lines="none" key={index}>
              <NavIcon slot="start" icon={bookmarkOutline} />
              <NavLabel>{label}</NavLabel>
            </NavItem>
          ))}
        </NavList>
      </NavContent>
    </NavMenu>
  );
};

export default Menu;

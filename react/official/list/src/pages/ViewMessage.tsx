import { useState } from 'react';
import { Message, getMessage } from '../data/messages';
import {
  NavBackButton,
  NavButtons,
  NavContent,
  NavHeader,
  NavIcon,
  NavItem,
  NavLabel,
  NavNote,
  NavPage,
  NavToolbar,
  useNavViewWillEnter,
} from '@navify/react';
import { personCircle } from 'navicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';

function ViewMessage() {
  const [message, setMessage] = useState<Message>();
  const params = useParams<{ id: string }>();

  useNavViewWillEnter(() => {
    const msg = getMessage(parseInt(params.id, 10));
    setMessage(msg);
  });

  return (
    <NavPage id="view-message-page">
      <NavHeader translucent>
        <NavToolbar>
          <NavButtons slot="start">
            <NavBackButton text="Inbox" defaultHref="/home"></NavBackButton>
          </NavButtons>
        </NavToolbar>
      </NavHeader>

      <NavContent fullscreen>
        {message ? (
          <>
            <NavItem>
              <NavIcon icon={personCircle} color="primary"></NavIcon>
              <NavLabel className="nav-text-wrap">
                <h2>
                  {message.fromName}
                  <span className="date">
                    <NavNote>{message.date}</NavNote>
                  </span>
                </h2>
                <h3>
                  To: <NavNote>Me</NavNote>
                </h3>
              </NavLabel>
            </NavItem>

            <div className="nav-padding">
              <h1>{message.subject}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </NavContent>
    </NavPage>
  );
}

export default ViewMessage;

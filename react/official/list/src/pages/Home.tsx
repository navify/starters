import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  NavContent,
  NavHeader,
  NavList,
  NavPage,
  NavRefresher,
  NavRefresherContent,
  NavTitle,
  NavToolbar,
  useNavViewWillEnter
} from '@navify/react';
import './Home.css';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useNavViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <NavPage id="home-page">
      <NavHeader>
        <NavToolbar>
          <NavTitle>Inbox</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent fullscreen>
        <NavRefresher slot="fixed" onNavRefresh={refresh}>
          <NavRefresherContent></NavRefresherContent>
        </NavRefresher>

        <NavHeader collapse="condense">
          <NavToolbar>
            <NavTitle size="large">
              Inbox
            </NavTitle>
          </NavToolbar>
        </NavHeader>

        <NavList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </NavList>
      </NavContent>
    </NavPage>
  );
};

export default Home;

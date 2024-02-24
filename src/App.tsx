import '@assets/styles/main.css';
import InnerWrapper from '@components/common/InnerWrapper';
import Wrapper from '@components/common/Wrapper';
import UserList from '@components/UserList/UserList';

function App() {
  return (
    <Wrapper>
      <InnerWrapper>
        <UserList />
      </InnerWrapper>
    </Wrapper>
  );
}

export default App;

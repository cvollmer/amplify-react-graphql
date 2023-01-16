import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from '@aws-amplify/ui-react';

function App({ signOut }) {
  return (
    <View className="app">
      <Card>
        <Image src={logo} className='app-logo' alt='React' />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Signout</Button>
    </View>
  );
}

export default withAuthenticator(App);

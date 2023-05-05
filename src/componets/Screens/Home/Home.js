import { View, Text, Button } from 'react-native';
import { styles } from './Home.styles';

export const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home page</Text>

      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Registration')}
      />

      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

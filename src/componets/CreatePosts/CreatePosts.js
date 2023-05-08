import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './CreatePosts.styled';

export const CreatePosts = () => {
  return (
    <View style={styles.container}>
      <View>
	  <TouchableOpacity onPress={() => {}}>
        <Text style={styles.text}>Зняти фото</Text>
      </TouchableOpacity>
	  </View>
      <Text style={styles.text}>Завантажити фото</Text>

      <TextInput inputMode="text" placeholder="Назва" />

      <Text style={styles.text}>Місцевість</Text>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.text}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

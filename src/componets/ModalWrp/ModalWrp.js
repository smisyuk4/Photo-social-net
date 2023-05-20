import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './ModalWrp.styles';

export const ModalWrp = ({
  title,
  modalVisible,
  setModalVisible,
  location,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          {title && <Text style={styles.modalTitle}>{title}</Text>}

          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <AntDesign name="close" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.mapWrp}>
            <MapView
              style={styles.mapStyle}
              region={{
                ...location,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsUserLocation={true}
            >
              {location && (
                <Marker title={location.title} coordinate={location} />
              )}
            </MapView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

import { useState, useEffect, useRef } from 'react';
import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './ModalWrp.styles';

export const ModalWrp = ({
  title,
  location,
  modalVisible,
  setModalVisible,
}) => {
  console.log('location come', location);

  const [draggableMarkerCoords, setDraggableMarkerCoords] = useState(location);
  console.log('location dragg', draggableMarkerCoords);

  return (
    <Modal
      animationType="fade"
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
                <Marker
                  draggable
                  title={location.title ? location.title : null}
                  coordinate={draggableMarkerCoords}
                  onDragEnd={e =>
                    setDraggableMarkerCoords(e.nativeEvent.coordinate)
                  }
                />
              )}
            </MapView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

import { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './ModalWrp.styles';

export const ModalWrp = ({
  title,
  location,
  modalVisible,
  setModalVisible,
  draggableMarker,
}) => {
  const [draggableMarkerCoords, setDraggableMarkerCoords] = useState(location);
  const [isMoveMarker, setIsMoveMarker] = useState(false)

  const closeAndElevate = () => {
    setModalVisible(!modalVisible);
    draggableMarker(draggableMarkerCoords);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          {title && (
            <View>
              <Text style={styles.modalTitle}>{title}</Text>
              <Text style={styles.modalSubTitle}>(режим редагування - перемісти маркер)</Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.buttonClose}
            onPress={closeAndElevate}
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
                  draggable={true}
                  title={location.title ? location.title : null}
                  pinColor={isMoveMarker ? 'green' : 'red'}
                  coordinate={draggableMarkerCoords}
                  onDragStart={()=>{setIsMoveMarker(true)}}
                  onDragEnd={e => {
                    const newCoords = e.nativeEvent.coordinate;
                    setDraggableMarkerCoords(prev => ({
                      ...prev,
                      ...newCoords,
                    }));
                  }}
                />
              )}
            </MapView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

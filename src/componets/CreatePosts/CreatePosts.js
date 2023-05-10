// import { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { Camera, CameraType } from 'expo-camera';

// import { styles } from './CreatePosts.styled';



import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CreatePosts = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

// import React, { useState, useEffect } from 'react';
// import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// import { Camera } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';

// export const CreatePosts = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [cameraRef, setCameraRef] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       await MediaLibrary.requestPermissionsAsync();

//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View><Text>&&&</Text></View>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Camera
//         style={styles.camera}
//         type={type}
//         ref={ref => {
//           setCameraRef(ref);
//         }}
//       >
//         <View style={styles.photoView}>
//           <TouchableOpacity
//             style={styles.flipContainer}
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}
//           >
//             <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
//               {' '}
//               Flip{' '}
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={async () => {
//               if (cameraRef) {
//                 const { uri } = await cameraRef.takePictureAsync();
//                 await MediaLibrary.createAssetAsync(uri);
//               }
//             }}
//           >
//             <View style={styles.takePhotoOut}>
//               <View style={styles.takePhotoInner}></View>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   camera: { flex: 1 },
//   photoView: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     justifyContent: 'flex-end',
//   },

//   flipContainer: {
//     flex: 0.1,
//     alignSelf: 'flex-end',
//   },

//   button: { alignSelf: 'center' },

//   takePhotoOut: {
//     borderWidth: 2,
//     borderColor: 'white',
//     height: 50,
//     width: 50,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 50,
//   },

//   takePhotoInner: {
//     borderWidth: 2,
//     borderColor: 'white',
//     height: 40,
//     width: 40,
//     backgroundColor: 'white',
//     borderRadius: 50,
//   },
// });

// export const CreatePosts = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [cameraRef, setCameraRef] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       //   await MediaLibrary.requestPermissionsAsync();

//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   //   const [type, setType] = useState(CameraType.back);
//   //   const [permission, requestPermission] = Camera.useCameraPermissions();

//   //   const toggleCameraType = () => {
//   //     setType(current =>
//   //       current === CameraType.back ? CameraType.front : CameraType.back
//   //     );
//   //   };
//   // type={type}
//   return (
//     <View style={styles.container}>
//       <View>
//         <Camera
//           style={styles.camera}
//           ref={ref => {
//             setCameraRef(ref);
//           }}
//         >
//           <View style={styles.photoView}>
//             <TouchableOpacity
//             //   style={styles.flipContainer}
//             //   onPress={() => {
//             //     setType(
//             //       type === Camera.Constants.Type.back
//             //         ? Camera.Constants.Type.front
//             //         : Camera.Constants.Type.back
//             //     );
//             //   }}
//             >
//               <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
//                 {' '}
//                 Flip{' '}
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={async () => {
//                 if (cameraRef) {
//                   const { uri } = await cameraRef.takePictureAsync();
//                     // await MediaLibrary.createAssetAsync(uri);
//                 }
//               }}
//             >
//               {/* <View style={styles.takePhotoOut}>
//                 <View style={styles.takePhotoInner}></View>
//               </View> */}
//             </TouchableOpacity>
//           </View>
//         </Camera>
//       </View>
//       {/* <Text style={styles.text}>Завантажити фото</Text>

//       <TextInput inputMode="text" placeholder="Назва" />

//       <Text style={styles.text}>Місцевість</Text>

//       <TouchableOpacity onPress={() => {}}>
//         <Text style={styles.text}>Опублікувати</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

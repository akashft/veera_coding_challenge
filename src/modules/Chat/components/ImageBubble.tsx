import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Lightbox from 'react-native-lightbox-v2';

interface IImageBubble {
  isReceived?: boolean;
  url: string;
  messageId: number;
  createdAt: number;
}
const ImageBubble = ({
  isReceived,
  url,
  messageId,
  createdAt,
}: IImageBubble) => {

  const [loading, setLoading] = useState(true);
  if (!isReceived) {
    return (
      <View style={styles.sentBubble} key={messageId}>
        {loading &&
          <Text >Loading...</Text>}

        <FastImage
          style={{ width: 200, height: 200 }}
          source={{
            uri: url,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.stretch}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.receivedBubble} key={messageId}>
        {loading &&
          <Text >Loading...</Text>
        }
        <FastImage
          style={{ width: 200, height: 200 }}
          source={{
            uri: url,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.stretch}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  receivedBubble: {
    backgroundColor: '#dedede',
    padding: 10,
    maxWidth: '50%',
    alignSelf: 'flex-start',
    //maxWidth: 500,
    //padding: 14,

    //alignItems:"center"
  },
  sentBubble: {
    backgroundColor: '#0078fe',
    marginTop: 10,
    padding: 4,
    marginLeft: '45%',
    //marginBottom: 15,

    maxWidth: '50%',
    alignSelf: 'flex-end',
    //maxWidth: 500,
  },
  rightArrow: {
    position: 'absolute',
    backgroundColor: '#0078fe',
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },
  rightArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eeeeee',
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },
  leftArrow: {
    position: 'absolute',
    backgroundColor: '#dedede',
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },
  leftArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eeeeee',
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20,
  },
});

export default ImageBubble;


import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
// import Icons from 'react-native-vector-icons/MaterialIcons'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  playButton1: {
    width: 60,
    height: 60,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: 'rgba(229, 10, 78, 0.64)',
    borderColor: 'white',
    borderWidth: 4
  },
  playButton2: {
    width: 20,
    height: 20,
    marginLeft: 17,
    marginTop: 16
  },
  playButton3: {
    width: 20,
    height: 20,
    marginLeft: 16,
    marginTop: 16
  },

  playButton: {
    opacity: 0.9
  },
  playContainer: {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',

  }
})

const PlayButton = props => (
  <View style={styles.playContainer}>
    <TouchableOpacity
      onPress={() => props.onPress()}
    >
      <View style={styles.playButton1}>
        {props.paused ?
          <Image resizeMode={'cover'} style={styles.playButton2} source={require('./flickpost_playicon.png')} />
          :
          <Image resizeMode={'cover'} style={styles.playButton3} source={require('./flickpost_pauseicon.png')} />
        }
      </View>
      {/* <Icons
          style={styles.playButton}
          name={props.paused ? 'play-circle-outline' : 'pause-circle-outline'}
          color={props.theme}
          size={75}
        /> */}
      {/* } */}
    </TouchableOpacity>
  </View>
)

PlayButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
}

export { PlayButton }

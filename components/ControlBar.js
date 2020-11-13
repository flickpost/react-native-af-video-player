import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ToggleIcon, Time, Scrubber } from './'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    alignSelf: 'stretch',
    justifyContent: 'flex-end'
  }
})

const ControlBar = (props) => {
  const {
    onSeek,
    onSeekRelease,
    progress,
    currentTime,
    duration,
    muted,
    fullscreen,
    theme,
    inlineOnly
  } = props

  return (
    <>
      {/* <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.75)']} style={styles.container}> */}
      <View colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.75)']} style={styles.container}>
        {!inlineOnly ? <>
          <Time time={currentTime} inlineOnly={inlineOnly} theme={theme.seconds} />
          <Scrubber
            onSeek={pos => onSeek(pos)}
            onSeekRelease={pos => onSeekRelease(pos)}
            progress={progress}
            theme={{ scrubberThumb: theme.scrubberThumb, scrubberBar: theme.scrubberBar }}
          />
          {/* <ToggleIcon
            paddingLeft
            theme={theme.volume}
            onPress={() => props.toggleMute()}
            isOn={muted}
            iconOff="volume-up"
            iconOn="volume-mute"
            size={20}
          /> */}
        </> : null}

        <Time time={duration} inlineOnly={inlineOnly} theme={theme.duration} />
        {!inlineOnly &&
        <ToggleIcon
          paddingRight
          onPress={() => props.toggleFS()}
          iconOff="fullscreen"
          iconOn="fullscreen-exit"
          isOn={fullscreen}
          theme={theme.fullscreen}
        />}
      </View>
      {Platform.OS === 'ios' ? <>{inlineOnly ? <View style={{ paddingBottom: 5 }}></View> : null}</> : null}

    </>
  )
}

ControlBar.propTypes = {
  toggleFS: PropTypes.func.isRequired,
  toggleMute: PropTypes.func.isRequired,
  onSeek: PropTypes.func.isRequired,
  onSeekRelease: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  inlineOnly: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
}

export { ControlBar }

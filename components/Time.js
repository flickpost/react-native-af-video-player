import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Platform } from 'react-native'

const backgroundColor1 = 'transparent';
const backgroundColor2 = 'rgba(61, 55, 55, 0.79)';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: backgroundColor2,
    borderRadius: 15,
    marginRight: 10,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        marginTop: 5,
        height: 25,
        minWidth: 50,
      },
      android: {
        padding: 10,
        paddingBottom: 10,
        marginBottom: 10,
        minWidth: 40,
      }
    })
  },
  container1: {
    alignItems: 'center',
    backgroundColor: backgroundColor1,
    borderRadius: 15,
    justifyContent: 'center',
    padding: 10,
    minWidth: 60
  }
})

class Time extends Component {
  getTime(time) {
    // format the seconds saved into 00:00:00
    const secs = time % 60
    const s2 = (time - secs) / 60
    const mins = s2 % 60
    const hrs = (s2 - mins) / 60
    const hours = this.addZeros(hrs) > 0 ? `${this.addZeros(hrs)}:` : ''
    return `${hours}${this.addZeros(mins)}:${this.addZeros(secs)}`
  }

  addZeros(time) {
    return (time < 10) ? (`0${time}`) : time
  }

  render() {
    return (
      <>
        {this.props.inlineOnly ?
          <>
            <View style={styles.container}>
              <Text style={{ color: this.props.theme, fontSize: 11 }}>{this.getTime(parseInt(this.props.time, 10))}</Text>
            </View>
          </>
          :
          <>
            <View style={styles.container1}>
              <Text style={{ color: this.props.theme }}>{this.getTime(parseInt(this.props.time, 10))}</Text>
            </View>
          </>
        }
      </>
    )
  }
}

Time.propTypes = {
  time: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired
}

export { Time }

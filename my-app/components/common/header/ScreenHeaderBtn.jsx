import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg("60%")}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
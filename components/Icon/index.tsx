import { Image, Text, View } from 'react-native'

import React from 'react'

const defIcon = require('../../assets/images/iconify.png')

interface Props {
    style: any
    icon: any
}
const Icon: React.FC<Props> =({style='', icon = ''}) => {
  // let rIcon = icon == undefined? defIcon: icon
  let rIcon = {uri: `https://openweathermap.org/img/wn/${icon}.png`}
  return (
    <Image source={defIcon} style = {style} />
  )
}


export default Icon
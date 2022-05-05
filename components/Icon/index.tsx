import { Image, Text, View } from 'react-native'

import React from 'react'

const icon = require('../../assets/images/iconify.png')

interface Props {
    style: any
}
const Icon: React.FC<Props> =({style}) => {
  return (
    <Image source={icon} style = {style} />
  )
}


export default Icon
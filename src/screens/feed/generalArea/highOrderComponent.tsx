import React, { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Text } from '~/theme';
import { styles } from './customeStyle';

interface Props {
  text: string;
}

const UpdatedComponent: FC<Props> = ({ text ,children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onPress = () => {
    setIsOpen(!isOpen);
  };

  return (
      <Box>
    <TouchableOpacity onPress={onPress}>
      <Text style={isOpen? styles.titleOpen:styles.title}>{text}</Text>
 
    </TouchableOpacity>
      {isOpen && children}

      

    </Box>

  );
};

export default UpdatedComponent;

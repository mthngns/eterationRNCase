import React from 'react';
import Box from '../Box/Box';
import {styles} from './ListEmptyState.styles';
import CustomText from '../CustomText/CustomText';

const ListEmptyState = ({title}: {title?: string}) => {
  return (
    <Box style={styles.container}>
      <CustomText style={styles.text}>
        {title ? title : 'Empty list please provide a data...'}
      </CustomText>
    </Box>
  );
};

export default ListEmptyState;

import React from 'react';
import Box from '../Box';
import CustomText from '../CustomText';
import {styles} from './ListEmptyState.styles';

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

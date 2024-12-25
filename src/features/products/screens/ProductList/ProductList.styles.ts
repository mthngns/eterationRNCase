import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  listContainer: {
    backgroundColor: 'red',
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCard: {
    padding: 5,
    minHeight: 90,
    backgroundColor: 'skyblue',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

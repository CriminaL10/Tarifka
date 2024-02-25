import {Dimensions, StyleSheet} from 'react-native';

const dim = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  innerContainer: {
    borderBottomWidth: 1,
    paddingVertical: 5,
    borderColor: '#b8b5b5',
  },
  image: {
    width: dim.width,
    height: dim.height / 3,
    resizeMode: 'cover',
  },
  title: {
    margin: 5,
    fontSize: 25,
    color: '#952020',
    fontWeight: 'bold',
  },
  area: {
    fontSize: 15,
    color: '#952020',
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 5,
  },
  description: {
    margin: 5,
  },
});

export default styles;

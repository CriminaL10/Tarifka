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
  press: {
    backgroundColor: 'red',
    borderRadius: 10,
    margin: 10,
    minHeight: 50,
    justifyContent: 'center',
  },
  pressText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});

export default styles;

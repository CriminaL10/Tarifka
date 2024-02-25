import {StyleSheet, Dimensions} from 'react-native';

const dim = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    height: dim.height / 4,
    justifyContent: 'flex-end',
    margin: 10,
  },
  image: {
    width: '100%',
    height: dim.height / 4,
    position: 'absolute',

    resizeMode: 'cover',
    borderRadius: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    backgroundColor: 'black',
    opacity: 0.5,
    textAlign: 'right',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default styles;

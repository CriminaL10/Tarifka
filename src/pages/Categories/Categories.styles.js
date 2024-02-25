import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    backgroundColor: 'orange',
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
  },
  body: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    resizeMode: 'contain',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  title: {
    fontSize: 25,
    paddingLeft: 10,
  },
});

export default styles;

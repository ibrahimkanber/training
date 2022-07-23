import {Alert} from 'react-native';

export const useAlert = () => {
  const showAlert = (title: string, message: string, onPress?: () => void) => {
    Alert.alert(title, message, [{text: 'OK', onPress}]);
  };
  return {showAlert};
};

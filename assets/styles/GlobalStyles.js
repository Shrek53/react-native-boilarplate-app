import { StyleSheet, Platform } from 'react-native';
import Theme from '../../constants/Theme';

export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: Theme.Global.Blue,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        elevation: 2
    },
});
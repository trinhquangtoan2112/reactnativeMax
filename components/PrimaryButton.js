import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {

  return (

    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={onPress} android_ripple={{ color: '#640233' }} style={({ pressed }) => pressed ? [styles.container, styles.pressed] : styles.container} >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#72063c',

    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.75
  }

})
export default PrimaryButton;

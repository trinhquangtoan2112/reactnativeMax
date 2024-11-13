

import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { View, TextInput, StyleSheet } from 'react-native';

function StartGameScreen({ onPicked }) {
  const [enterNumber, setEnterNumber] = useState();

  function numberInputHandler(enterText) {
    setEnterNumber(enterText)
  }
  function confirmInputHandler() {
    const chooseNumber = parseInt(enterNumber);

    if (isNaN(chooseNumber) || chooseNumber < 0 || chooseNumber > 99) {
      return;
    }

    console.log('pressHAndle' + chooseNumber)
    onPicked(chooseNumber)
  }
  function resetInputHandler() {
    setEnterNumber("")
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput keyboardType="number-pad" style={styles.numberInput} maxLength={2} onChangeText={numberInputHandler} value={enterNumber} />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#4e0329',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  }
})
export default StartGameScreen;
import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

function Input(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function InputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={ require( '../assets/image/crossed-list.png') }
          //tuterialMax/assets/image/
        />
        <TextInput
          style={styles.textInput}
          placeholder="✅ To Do!"
          onChangeText={InputHandler}
          value={enteredGoalText}
        />
        <View style={ styles.buttonContainer }>

          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} color="green" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="red" />
          </View>

        </View>
      </View>
    </Modal>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'lightblue',
  },
  image: {
    width: 300,
    height: 300,
    margin: 40,
    borderRadius:10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'purple',
    backgroundColor: '#FFE4E1',
    color: 'green',
    borderRadius: 16,
    width: '88%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

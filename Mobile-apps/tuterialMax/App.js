
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
// import GoalItem from './components/GoalItem'
// import GoalInput from './components/GoalInput'

export default function App() {
  //hook user input state
  const [ currentText, setCurrentText ] = useState( '' )
  const [ goals, setGoals ] = useState( [] )

  //as user types in input box !!!!! WE NEED TO USE IT AS STATE SO WE USE IN ON <L14></L14>
  function textHandler( enteredText ) {
    setCurrentText( enteredText )
  }

  //we'll pass enterText as
  function buttonHandler() {
    setGoals( ( goalFunction => [ ...goalFunction,
      {
        text: currentText,
        key: Math.random().toString()
    },] ) )
  }
 <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
      />

  return (
    <View style={ styles.appContainer }>

{/* container 1 - this is the top container */}
      <View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Enter text' onChangeText={textHandler} />
          <Button title="Add notes" onPress={buttonHandler}/>
        </View>
      </View>

{/* container 2 - this is the journal container */}
      <View style={ texts }>
        <FlatList data={ goals } renderItem={ itemData => {
          return (
            <View style={ styles.goalItem }>
              <Text>{itemData.item.text}</Text>
            </View>
          )
        } }/>
      </View>
{/* container 3 - this is the colored boxes */}
      <View style={ { flexDirection: "row", padding: 50 } }>

        <View style={ colors.top }>
          <Text>1</Text>
        </View>

        <View style={ colors.mid }>
          <Text>2</Text>
        </View>

        <View style={ colors.down }>
          <Text>3</Text>
        </View>

      </View>


    </View>

  );
}

const styles = StyleSheet.create( {
  goalItem: {
    margin: 8,
    padding: 3,
    borderRadius:6,
    backgroundColor: "pink",
  },
  appContainer: {
     flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
    padding: 50,
    color:'blue',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor:'gray',
    },

  textInput: {
    borderWidth: 1,
    borderColor: 'cccccc',
    width: '60%',
    marginRight: 8,
    padding: 8,
    justifyContent:'center'

  },
})


const texts = StyleSheet.create( {
  padding: 10,
  backgroundColor: 'white',
  justifyContent: 'center',
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
  flex:1,
})

const colors = StyleSheet.create( {
  flex:1,
  padding: 50,
  flexDirection: 'row',
  justifyContent:"center",
  top: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mid: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }


})

import { Text, View, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react';

export default function PrimaryButton( { children } ) {

  const [ num, setNum ] = useState( '' )

  function pressHandler() {
    console.log('pressed')
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={ pressHandler }
        style={ ( { pressed } ) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer }
      >
      <Text style={styles.textButton}>
    {children}
      </Text>
      </Pressable>
    </View>

  )
}

const styles = StyleSheet.create( {
  buttonInnerContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
  },
  buttonOuterContainer: {
    borderRadius: 20,
    margin: 4,
    overflow: 'hidden',
  },
  textButton: {
    color: 'green',
    textAlign: 'center',
  },
  pressed: {
    opacity:.75,

  }
} )

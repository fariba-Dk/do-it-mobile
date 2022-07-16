
import { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import Item from './components/Item'
import Input from './components/Input'

export default function Color() {


  return (
    <View style={ styles.appContainer }>
      <View style={ {
        flexDirection: "row",
        padding: 50
      } }>

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

  appContainer: {
     flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
    padding: 50,
    color:'blue',
  },
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

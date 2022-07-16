import { StyleSheet, View, Text, Pressable } from 'react-native';

function Item(props) {
  return (
    <View style={styles.Item}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  Item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor:'#FFE4E1',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'green',
    padding: 8,
  },

});

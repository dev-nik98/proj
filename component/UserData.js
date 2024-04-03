import {
    Text,
    View,

    StyleSheet} from 'react-native';


export default UserData=   (props) => {
    const item=props.item;
    
    return(
      <View style={style.box}>
      <Text style={style.item}> {item.name}  </Text>
      <Text style={style.item}> {item.email}  </Text>
    
      </View>
    )
    }
    
    const style = StyleSheet.create({
      item: {
        fontSize: 20,
        color: 'red',
        margin: 2,
        flex:1,
        textAlign: "center"
      
      },
      box:{
        flexDirection: "row",
       borderWidth: 2,
       marginBottom: 12,
       borderColor: 'blue',
      }
    });
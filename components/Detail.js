import React from 'react'
import { View, Text} from 'react-native';
import { customers } from '../customers'; 

const Detail = ({route, navigation}) => {

const { id } = route.params;

const customerToDisplay = customers.find(customer => customer.id.value === id)

return (
    <View >
      <Text>{id}</Text>
      <Text>{customerToDisplay ? customerToDisplay.name.first : "No info dude!!"}</Text>
    </ View> 
  )
}

export default Detail;
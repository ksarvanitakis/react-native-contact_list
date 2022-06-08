import React from "react";
import { View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { customers } from "../customers";

function Home({ navigation }) {
  /* const [customers, setCustomers] = useState({customers}) */

  const pressHandler = (customerDetails) => {
   /*  navigation.navigate("Detail", {id: customerDetails}); */
   navigation.setParams({itemId: 1 });
  };

  return (
    <View>
      {customers.map((customer) => (
        <Button key={customer.id.value} title={customer.name.first} onPress={pressHandler(customer.id.value)} />
      ))}
    </View>
  );
}

export default Home;

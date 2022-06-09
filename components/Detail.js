import React from "react";
import { View, Text } from "react-native";
import { customers } from "../customers";

const Detail = ({ route }) => {
  const { customer } = route.params;

  const customerToDisplay = customers.find(
    (customer) => customer.id.value === id
  );

  return (
    <View>
      <Text>
        Name: {customer.name.first} {customer.name.last}
      </Text>
      <Text>Email: {customer.email}</Text>
      <Image
        source={{ uri: customer.picture.large }}
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
};

export default Detail;

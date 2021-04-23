import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const Dashboard = ({ params }) => {
  const user = useSelector((state) => state.signIn.user);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello {user.firstName}!</Text>
      <Text>email: {user.email}</Text>
    </View>
  );
};

export default Dashboard;

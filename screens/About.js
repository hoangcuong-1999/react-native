import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../global/globalStyles";

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.paragraph}>
        Ipsum cupidatat voluptate deserunt ex velit dolor id ullamco nulla. Sunt
        dolor est adipisicing magna eu do ut sunt excepteur aliquip
        reprehenderit reprehenderit. Ad anim do reprehenderit cillum. Ex dolor
        commodo excepteur laborum et cillum quis amet labore velit non sit anim.
        Quis nisi irure aliquip culpa laborum pariatur laboris cillum. Eiusmod
        velit sit consectetur ullamco velit pariatur non laborum est mollit
        pariatur.
      </Text>
      <Text style={styles.paragraph}>
        Cillum voluptate aute voluptate culpa deserunt sint elit amet culpa
        cupidatat cillum ullamco cillum velit. Minim velit proident qui ea
        mollit nulla cillum dolore exercitation dolore et. Amet Lorem laboris
        Lorem labore qui ipsum voluptate nostrud proident anim. Nulla sunt sint
        amet labore amet exercitation et aute excepteur elit.
      </Text>
      <Text style={styles.paragraph}>
        Nisi aliquip nostrud aliqua Lorem. Excepteur laborum ipsum velit culpa
        anim est exercitation minim magna. Sint laborum minim esse elit. Elit
        officia esse enim quis tempor nulla et officia velit id deserunt et quis
        incididunt. Commodo deserunt veniam officia minim pariatur pariatur
        reprehenderit aliquip fugiat ad aute anim. Et pariatur officia elit
        mollit elit mollit anim laborum sit non sunt anim.
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  paragraph: {
    marginVertical: 5,
  },
});

import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default class RecipesScreen extends React.Component {
    render() {
        return (
          
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>
                Carrying out capping
                </Text>
                <Text style={styles.text}>
                    Coffee beans are ground just before capping. Coarse coffee is used in the companies-manufacturers. But in coffee shops this rule is not always followed. The main thing is to brew the drink for 15-30 minutes after grinding, until the coffee is exhaled.
                </Text>
                <Text style={styles.title}>
                Stages of capping
                </Text>
                <Text style={styles.text}>
                1. In cups or cups for capping pour ground coffee at the rate of 11 g on 200 ml of water. The cap tester takes the glass in his hand, shakes it lightly and sniffs the coffee.
                </Text>
                <Text style={styles.text}>
                2. Pour water heated to +93 ± 3 ° C into a coffee pot and a glass for washing spoons. Coffee is not stirred or covered. Brewing time - 4 minutes. It is important that the water in the glass for washing spoons was the same temperature as the drink.
                </Text>
                <Text style={styles.text}>
                3. On the surface of the coffee is formed a "cap" - a crust of popped grains of thick. They protect the drink from the evaporation of essential oils. When the coffee is brewed, the capper leans over the glass and breaks the crust (spoon drives the grains in the opposite direction) and at the same time inhales the aroma of the drink. Then the kapper, shallowly lowering the spoon, mixes the top layer of coffee so that the grains fall to the bottom.
                </Text>
                <Text style={styles.text}>
                4. Kapper alternately cracks the crust on all glasses. After each glass, he dips a spoon into a container of clean water.
                </Text>
                <Text style={styles.text}>
                5. Using a spoon, the capper removes the foam in the glasses, throwing it into the spitting container. The spoon needs to be washed every time.
                </Text>
                <Text style={styles.text}>
                6. When the coffee cools down to about +70 ° C and can be drunk without roasting, the taster scoops up a spoonful of drink and intensively, with a whistle, sucks it into his mouth. The fluid should simultaneously cover the maximum number of receptors (Fig. 1). 
                </Text>
                <Image
                    source={require("../assets/tongue.png")}
                    style={{ marginTop: 10, marginBottom: 10, height: 200, width: 330}}>
                </Image>
                <Text style={styles.subImageText}>
                Fig.1. Taste receptor groups 
                </Text>
                <Text style={styles.text}>
                7. The taster spits the coffee and judges the aftertaste.
                </Text>
                <Text style={styles.text}>
                8. After dipping a spoon in clean water, the capper proceeds to tasting the coffee in the next glass.
                </Text>
                <Text style={styles.text}>
                9. A few minutes later, when the coffee has cooled down a little, the capper repeats the tasting again. 
                </Text>
                <Text style={styles.text}>
                10. Last tasting - at a temperature of + 37 ° C, to assess the cleanliness of the cup (presence or absence of unpleasant tastes).    
                </Text>
                <Text style={styles.text}>
                Experienced tasters can easily identify several hundred nuances of taste and aroma. But first you need to use the wheel of taste (Fig. 2). 
                </Text>
                <Image
                    source={require("../assets/tasteWeel.png")}
                    style={{ marginTop: 10, marginBottom: 10, height: 330, width: 330}}>
                </Image>
                <Text style={styles.subImageText}>
                Fig. 2. Wheel of flavors 
                </Text>
                <Text style={styles.title}>
                Evaluation parameters:
                </Text>
                <Text style={styles.pramList}>
                <Ionicons name="caret-forward-outline" size={10} style={{ color:'#002333' }}/> aroma (at the beginning);
                </Text>
                <Text style={styles.pramList}>
                <Ionicons name="caret-forward-outline" size={10} style={{ color:'#002333' }}/> taste;
                </Text>
                <Text style={styles.pramList}>
                <Ionicons name="caret-forward-outline" size={10} style={{ color:'#002333' }}/> aftertaste;
                </Text>
                <Text style={styles.pramList}>
                <Ionicons name="caret-forward-outline" size={10} style={{ color:'#002333' }}/> acidity. (The sourness can be citrus, floral, or nutty);
                </Text>
                <Text style={styles.pramList}>
                <Ionicons name="caret-forward-outline" size={10} style={{ color:'#002333' }}/> body (richness of taste);
                </Text>
                <Text style={styles.pramList}>
                <Ionicons name="caret-forward-outline" size={10} style={{ color:'#002333' }}/> taste stability (it should be the same for different servings of coffee 
                </Text>
                <Text style={styles.pramList}>
                <Ionicons name="caret-forward-outline" size={10} style={{ color:'#002333' }}/> brewed from beans of the same batch);
                </Text>
                <Text style={styles.pramList}>
                <Ionicons name="caret-forward-outline" size={10} style={{ color:'#002333' }}/> balance (harmonious combination of different nuances of taste);
                </Text>
                <Text style={styles.pramList}>
                <Ionicons name="caret-forward-outline" size={10} style={{ color:'#002333' }}/> the cleanliness of the cup;
                </Text>
                <Text style={styles.pramList}>
                <Ionicons name="caret-forward-outline" size={10} style={{ color:'#002333' }}/> sweetness;
                </Text>
                <Text style={styles.pramList}>
                <Ionicons name="caret-forward-outline" size={10} style={{ color:'#002333' }}/> general impression;
                </Text>
                <Text style={styles.pramList}>
                <Ionicons name="caret-forward-outline" size={10} style={{ color:'#002333' }}/> defects. 
                </Text>
            </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        marginHorizontal: 20,
      },
      title:{
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10, 
        textAlign: 'center'
      },
      text: {
        fontSize: 18,
        marginTop: 10,
        alignItems: 'center',
        textAlign: 'justify',
        // justifyContent: 'center',
      },
      subImageText: {
          fontSize: 14,
          marginTop: 5,
          marginBottom: 10,
          textAlign: 'center',
          fontStyle: 'italic'        
      },
      pramList:{
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'justify',
        fontStyle: 'italic',
        fontSize: 18
      }
})
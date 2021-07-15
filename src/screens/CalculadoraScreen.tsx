import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { styles } from '../theme/AppTheme';
import { ButtonCal } from '../components/ButtonCal';
import { useCalculadora } from '../components/hooks/useCalculadora';


export const CalculadoraScreen = () => {

    const {
        previousNumber,
        number,
        clean,
        buildNumber,
        positiveNegative,
        del,
        addButton,
        deductButton,
        multiplyButton,
        divideButton,
        calculate
    } = useCalculadora();

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <View style={styles.calculadoraContainer}>
            {
                (previousNumber !== '0') && (
                    <Text style={styles.previousNumber}>{previousNumber}</Text>
                )
            }
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{number}</Text>

            <View style={styles.row}>
                <ButtonCal text="C" color="#9B9B9B" textColor="black" action={clean} />
                <ButtonCal text="+/-" color="#9B9B9B" textColor="black" action={positiveNegative} />
                <ButtonCal text="del" color="#9B9B9B" textColor="black" action={del} />
                <ButtonCal text="/" color="#FF9427" action={divideButton} />
            </View>

            <View style={styles.row}>
                <ButtonCal text="7" action={buildNumber} />
                <ButtonCal text="8" action={buildNumber} />
                <ButtonCal text="9" action={buildNumber} />
                <ButtonCal text="x" action={multiplyButton} color="#FF9427" />
            </View>

            <View style={styles.row}>
                <ButtonCal text="4" action={buildNumber} />
                <ButtonCal text="5" action={buildNumber} />
                <ButtonCal text="6" action={buildNumber} />
                <ButtonCal text="-" action={deductButton} color="#FF9427" />
            </View>

            <View style={styles.row}>
                <ButtonCal text="1" action={buildNumber} />
                <ButtonCal text="2" action={buildNumber} />
                <ButtonCal text="3" action={buildNumber} />
                <ButtonCal text="+" action={addButton} color="#FF9427" />
            </View>

            <View style={styles.row}>
                <ButtonCal text="0" action={buildNumber} wide />
                <ButtonCal text="." action={buildNumber} />
                <ButtonCal text="=" action={calculate} color="#FF9427" />
            </View>

        </View>
    )
}

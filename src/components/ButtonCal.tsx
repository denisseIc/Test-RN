import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'

interface Props {
    text: string,
    color?: string,
    textColor?: string,
    wide?: boolean,
    action: (text: string) => void
}

export const ButtonCal = ({text, color = '#2D2D2D', textColor = 'white', wide = false, action}: Props) => {
    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (wide) ? 180 : 80
            }}>
                <Text style={{
                        ...styles.buttonText,
                        color: textColor
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '300'
    }
});

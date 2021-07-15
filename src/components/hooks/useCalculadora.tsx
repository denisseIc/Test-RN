import { useState, useRef } from 'react'

enum Operators {
    add, deduct, multiply, divide
}

export const useCalculadora = () => {
    const [previousNumber, setPreviousNumber] = useState('0');
    const [number, setNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    const clean = () => {
        setNumber('0');
        setPreviousNumber('0');
    };

    const buildNumber = (textNumber: string) => {
        // Don't accept two poitns
        if (number.includes('.') && textNumber === '.') return;
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (textNumber === '.') {
                setNumber(number + textNumber);
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);
            } else if (textNumber !== '0' && !number.includes('.')) {
                if (number.startsWith('-0')) {
                    setNumber('-' + textNumber);
                } else {
                    setNumber(textNumber);
                }
            } else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number);
            } else {
                setNumber(number + textNumber);
            }
        } else {
            setNumber(number + textNumber);
        }
    };

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const del = () => {
        if (number.length === 1 || (number.length === 2 && number.startsWith('-'))) {
            setNumber('0');
        } else {
            setNumber(number.slice(0, -1));
        }
    }

    const updatePreviousNumberWithNumber = () => {
        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        } else {
            setPreviousNumber(number);
        }
        setNumber('0');
    }

    const addButton = () => {
        updatePreviousNumberWithNumber();
        lastOperation.current = Operators.add
    }

    const deductButton = () => {
        updatePreviousNumberWithNumber();
        lastOperation.current = Operators.deduct
    }
    const multiplyButton = () => {
        updatePreviousNumberWithNumber();
        lastOperation.current = Operators.multiply
    }
    const divideButton = () => {
        updatePreviousNumberWithNumber();
        lastOperation.current = Operators.divide
    }

    const calculate = () => {
        
        const numberOne = Number(previousNumber);
        const numberTwo = Number(number);

        switch (lastOperation.current) {
            case Operators.add:
                setNumber(`${numberOne + numberTwo}`)
                break;
            case Operators.deduct:
                setNumber(`${numberOne - numberTwo}`)
                break;
            case Operators.multiply:
                setNumber(`${numberOne * numberTwo}`)
                break;
            case Operators.divide:
                setNumber(`${numberOne / numberTwo}`)
                break;
        }

        setPreviousNumber('0');
    }

    return {
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
    }
}

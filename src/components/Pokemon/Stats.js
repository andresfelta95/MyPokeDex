import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';




export default function Stats(props) {
    const { stats } = props;

    const barStyles = (base_stat) => {
        if (base_stat < 50) {
            return {
                backgroundColor: '#ff7675',
                width: base_stat,
            };
        } else if (base_stat >= 50 && base_stat < 100) {
            return {
                backgroundColor: '#fdcb6e',
                width: base_stat,
            };
        } else if (base_stat >= 100 && base_stat < 150) {
            return {
                backgroundColor: '#55efc4',
                width: base_stat,
            };
        } else if (base_stat >= 150 && base_stat < 200) {
            return {
                backgroundColor: '#00b894',
                width: base_stat,
            };
        } else if (base_stat >= 200) {
            return {
                backgroundColor: '#00cec9',
                width: base_stat,
            };
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Base Stats</Text>
        {stats.map((item, index) => (
            <View 
                key={index} 
                style={styles.stat}
            >
                <View style={{ width: '40%' }}>
                    <Text style={styles.statName}>
                        {item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1)}
                    </Text>
                </View>
                <View style={styles.blockStatVal}>
                    <Text style={styles.statValue}>
                        {item.base_stat}
                    </Text>
                    <View style={styles.bgBar}>
                        <View style={{ ...styles.bar, ...barStyles(item.base_stat) }}></View>
                    </View>
                </View>                    
            </View>
        ))}
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: -10,
        marginBottom: 80,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 10,
    },
    stat: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingVertical: 5,
    },
    statName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    blockStatVal: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statValue: {
        width: '12%',
        fontSize: 16,
    },
    bgBar: {
        width: '88%',
        height: 10,
        backgroundColor: '#eee',
        borderRadius: 20,
        overflow: 'hidden',
    },
    bar: {
        height: 10,
        borderRadius: 10,
    },
});
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';


const wd = Dimensions.get('window').width;
const hg = Dimensions.get('window').height;
class DonHangHome extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.TaoDonHang}>
                    <View style={{ backgroundColor: '#00ffff', width: 50, height: 50 }}></View>
                    <Text style={{ fontSize: 20 }}> Tạo đơn và giao hàng </Text>
                </TouchableOpacity>
                <View style={styles.QuanLyDon}>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 0.5, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#00ffff', width: 30, height: 30 }}></View>
                        <Text style={{ marginLeft: 20, fontSize: 16 }}> Danh sách đơn hàng </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 0.5, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#00ffff', width: 30, height: 30 }}></View>
                        <Text style={{ marginLeft: 20, fontSize: 16 }}> Khách trả hàng </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 0.5, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#00ffff', width: 30, height: 30 }}></View>
                        <Text style={{ marginLeft: 20, fontSize: 16 }}> Quản lý giao hàng </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', padding: 10, borderWidth: 0.5, alignItems: 'center', marginTop: 10,backgroundColor:'#fff' }}>
                    <View style={{ backgroundColor: '#00ffff', width: 30, height: 30 }}></View>
                    <Text style={{ marginLeft: 20, fontSize: 16 }}> Bán tại cửa hàng </Text>
                    <View style={{ backgroundColor: '#00ffff', width: 30, height: 30, marginLeft:180 }}></View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    TaoDonHang: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: wd,
        height: 250,
        backgroundColor: '#e8e8e8'
    },
    QuanLyDon: {
        flexDirection: 'column',
        backgroundColor: '#fff'
    }
})

export default DonHangHome;
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Switch, Button } from 'react-native';


const wd = Dimensions.get('window').width;
const hg = Dimensions.get('window').height;
class ChonSanPham extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 10, }}>
                    <TextInput style={{ borderWidth: 0.5, width: 320, height: 40, padding: 5, }} placeholder="Tìm kiếm sản phẩm"></TextInput>
                    <View style={{ backgroundColor: '#00ffff', width: 40, height: 40, marginLeft: 30, }}></View>
                </View>
                <View style={{ flexDirection: 'row',backgroundColor: '#e8e8e8'}}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 17, marginLeft: 5, }}> Tất cả sản phẩm </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 17, marginLeft: 130 }}> Chọn nhiều </Text>
                    <Switch></Switch>
                </View>
                <View style={{ marginTop: 10, backgroundColor: '#fff', flexDirection: 'column',}}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5,width: wd, }}>
                        <View style={{ margin: 10,backgroundColor: '#00ffff', width: 60, height: 60, marginLeft: 30, }}></View>
                        <Text> Tên sản phẩm </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5,width: wd, }}>
                        <View style={{ margin: 10,backgroundColor: '#00ffff', width: 60, height: 60, marginLeft: 30, }}></View>
                        <Text> Tên sản phẩm </Text>
                    </TouchableOpacity>
                </View>
                <View style = {{flex: 1,flexDirection: 'column-reverse'}}>
                    <Button title = "Xác Nhận" style = {{backgroundColor: '#6495ed',}}> </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
})

export default ChonSanPham;
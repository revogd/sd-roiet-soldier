import { FlatList, StyleSheet, View, ActivityIndicator, Text } from 'react-native'

import React, { useState, useEffect } from 'react'
import Axios from 'axios';




export default function Soldiers() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await Axios.get("https://sd-roiet-api.onrender.com/soldiers?_limit=10");
            console.log(response);
            setRows(response);
            setLoading(true);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);
  return (
    <View>
      <Text>รายชื่อทหาร</Text>
      {loading ? <ActivityIndicator size='large'/> : (
      <FlatList
        data={rows}
        renderItem={({item}) => 
        <Text style={styles.item}>{item.ชื่อ}  {item.นามสกุล}   เกิด พ.ศ.{item.เกิด}</Text>}
        
        //onEndReached={loadMoreData}
        //onEndReachedThreshold ={0.1}
        //ItemSeparatorComponent={() => <View style={styles.separator} />}
        //ListFooterComponent={this.renderFooter.bind(this)} 
       
      />
      )}
      
    </View>
  )
}

const styles = StyleSheet.create({})
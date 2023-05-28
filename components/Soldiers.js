import { FlatList, StyleSheet, View, ScrollView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Axios from 'axios';




export default function Soldiers() {
  const [rows, setRows] = useState([]);
  const [loading, setloading] = useState(false);
    useEffect(() => {
        const fetchData = async () =>{
          //setLoading(true);
          try {
            const {data: response} = await Axios.get("https://sd-roiet-api.onrender.com/soldiers");
            console.log(response);
            setRows(response);
            setloading(true);
          } catch (error) {
            console.error(error.message);
          }
          //setLoading(false);
        }
    
        fetchData();
      }, []);
  return (
    <View>
      <Text>รายชื่อทหาร</Text>
    <View>
      {loading && rows.map((row) => {
        <Text>{row.ชื่อ}</Text>
      })}
    </View>
    </View>
  )
}

const styles = StyleSheet.create({})
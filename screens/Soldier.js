import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Axios from 'axios';

export default function Soldier({route, navigation}) {
    const [item, setItem] = useState([]);
    const {pid} = route.params; //Get the param */  
    console.log(pid);


    useEffect((pid) => {
        const fetchData = async () =>{          
          try {
            const {data: response} = await Axios.get("https://sd-roiet-api.onrender.com/soldier/:pid"+pid);
            
            setItem(response);            
            setLoading(false);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);    

  return (
    <View>    
      <Text>{pid} </Text>  
      <Text>{item.ชื่อ}  {item.นามสกุล}   เกิด พ.ศ.{item.เกิด} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})
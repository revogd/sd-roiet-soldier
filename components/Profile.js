import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {

  const [soldier, setSoldier] = useState([]); 
   const [loading, setLoading] = useState(false); 
     useEffect(() => { 
         const fetchData = async (id) =>{ 
           setLoading(true); 
           try { 
             const {data: response} = await Axios.get("https://sd-roiet-api.onrender.com/soldier=${id}"); 
             console.log(response); 
             setRows(response); 
             setLoading(true); 
           } catch (error) { 
             console.error(error.message); 
           } 
           setLoading(false); 
         } 
  
         fetchData(); 
       }, []);  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
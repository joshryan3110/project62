import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../config';

export default class HomeScreen extends React.Component {

  constructor(){
    super()
    this.state={
      all_students: []
    }
  }

  async function (){
    var class_ref = await db.ref('/').on('value', data=>{
    var all_students = []
    var class_a = data.val().class_A;
    for(var i in class_a){
      all_students.push(class_a[i]);
    }
    all_students.sort(function(a,b){
      return a.roll - b.roll;
    });
    this.setState({ all_students: all_students })
  })
  }

  componentDidMount(){
    this.showAttend()
  }

  updateAttendance(roll_no, status){
    var id = '';
    if(roll_no<=9){
      id = "0" + roll_no;
    }
    else{
      id = roll_no;
    }
    var today = new Date()
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd < 10){
      dd = '0' + dd;
    }
    if(mm < 10){
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    var ref_path = id;
    var class_ref = db.ref(ref_path);
    class_ref.update({
      [today] : status, 
    })
  }
}

const styles = StyleSheet.create({
  
})
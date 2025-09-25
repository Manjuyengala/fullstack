import React,{useState}from 'react';
function RestaurantMenu(){
const[order,setOrder]=useState([]);
const menuItems=[
{id:1,name:'Dum Biryani',price:180},
{id:2,name:'Special Biryani',price:200},
{id:2,name:'Hyderabadi Biryani',price:260},
];
const addToOrder=(item)=>setOrder([...order,item]);
const total=order.reduce((sum,item)=>sum+item.price,0);
return{
<div style{{
minHeight:'100vh',
background'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),
url(https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
backgroundSize:'cover',
color:'white',
padding:'40px'
}}>
<div style={{maxWidth:'60px',margin:0 auto'}}>
<h1 style={{fontFamily:'Georgia',borderBottom:'1px solid golderrod'}}>Biryani House</h1>
<div style={{display:'grid',gap:'20px',margin:'30px 0'}}>
{menuItems.map(item=>(
<div key={item.id}style={{
display:'flex',
justifyContent:'space-between',
alignItems:'center',
background:'rgba(255,255,255,0.1)',
padding:'15px',
borderRadius:'5px'
}}>
<div>
<h3 style={{margin:0}}>{item.name}</h3>
<p style={{color:'goldenrod',margin:'5px}}))}}}
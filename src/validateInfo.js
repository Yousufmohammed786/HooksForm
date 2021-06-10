export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Name required';
  }
  if (!values.dv.trim()) {
    errors.dv = 'Diesel Valume required';
  }
  if (!values.vm.trim()) {
    errors.vm = 'Valume required';
  }
  if (!values.seg.trim()) {
    errors.seg = 'Segments required';
  }
  if (!values.numM.trim()) {
    errors.numM = 'Number of mines required';
  }
  if (!values.dw.trim()) {
    errors.dw = 'Degree required';
  }
  if (!values.lcd.trim()) {
    errors.lcd = 'Level of Confidence required';
  }
  if (!values.nm.trim()) {
    errors.nm = 'Number of Mines required';
  }
  if (!values.lc.trim()) {
    errors.lc = 'Level of Confidence required';
  }
   if (!values.cn.trim()) {
    errors.cn = 'Contact Number required';
   }
  if(document.getElementById("soc").selectedIndex ===0){
    errors.StatusofCustomer = 'Status of Customer selection required';
  }
  if(document.getElementById("es").selectedIndex ===0){
    errors.EngagementStatus = 'Engagement Status required';
  }
  if(document.getElementById("location").selectedIndex ===0){
    errors.location = 'location Status required';
  }
  if(document.getElementById("role").selectedIndex ===0){
      errors.selection = 'selection required';
    }
  if(document.getElementById("mt").selectedIndex ===0){
      errors.mt = 'Mine Type required';
    }
    if(document.getElementById("ore").selectedIndex ===0){
      errors.ore = 'Ore Type required';
    }
    if(document.getElementById("mr").selectedIndex ===0){
      errors.mr = 'Mine Region required';
    }
    if(document.getElementById("cl").selectedIndex ===0){
      errors.cl = 'Contract length required';
    }
    if(document.getElementById("sfs").selectedIndex ===0){
      errors.sfs = 'Sales Funel Stage required';
    }
    if(document.getElementById("ts").selectedIndex ===0){
      errors.ts = 'Type of Sprint required';
    }
    if(document.getElementById("lp").selectedIndex ===0){
      errors.lp = 'Level of Priority required';
    }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  if (!values.party) {
    errors.party = 'Tender Date required';

  } 
  else if (values.party) {
    errors.party = 'Y';

  } 
  
  if (!values.td) {
    errors.td = 'Contract Expiry Date required';
  } 
  if (!values.cd) {
    errors.cd = 'Engagement Date required';
  } 
  if (!values.tenderD) {
    errors.tenderD = 'Tender Date required';
  } 
  if (!values.ced) {
    errors.ced = 'Contact Expery Date required';
  } 
   if (!values.email) {
     errors.email = 'Email required';
     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
   }
  
  return errors;
}
